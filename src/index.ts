#!/usr/bin/env node
/**
 * Sensor Tower MCP Server
 * Exposes the Sensor Tower App Analysis API as MCP tools.
 */

import dotenv from 'dotenv';
dotenv.config();

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  type Tool,
  type CallToolResult,
  type CallToolRequest
} from "@modelcontextprotocol/sdk/types.js";

import express from 'express';
import { z, ZodError } from 'zod';
import { jsonSchemaToZod } from 'json-schema-to-zod';
import axios, { type AxiosRequestConfig, type AxiosError } from 'axios';

import type { JsonObject, McpToolDefinition } from './types.js';
import { getAllTools } from './tools/index.js';

/**
 * Server configuration
 */
export const SERVER_NAME = "sensor-tower-mcp";
export const SERVER_VERSION = "1.0";
export const API_BASE_URL = "https://api.sensortower.com";

/**
 * Load all tool definitions from categorized modules
 */
const toolDefinitionMap = getAllTools();


async function executeApiTool(
    toolName: string,
    definition: McpToolDefinition,
    toolArgs: JsonObject,
    sensorTowerApiKey: string | undefined
): Promise<CallToolResult> {
  try {
    let validatedArgs: JsonObject;
    try {
        const zodSchema = getZodSchemaFromJsonSchema(definition.inputSchema, toolName);
        const argsToParse = (typeof toolArgs === 'object' && toolArgs !== null) ? toolArgs : {};
        validatedArgs = zodSchema.parse(argsToParse);
    } catch (error: unknown) {
        if (error instanceof ZodError) {
            const validationErrorMessage = `Invalid arguments for tool '${toolName}': ${error.errors.map(e => `${e.path.join('.')} (${e.code}): ${e.message}`).join(', ')}`;
            return { content: [{ type: 'text', text: validationErrorMessage }] };
        } else {
             const errorMessage = error instanceof Error ? error.message : String(error);
             return { content: [{ type: 'text', text: `Internal error during validation setup: ${errorMessage}` }] };
        }
    }

    let urlPath = definition.pathTemplate;
    const queryParams: Record<string, any> = {};
    const headers: Record<string, string> = { 'Accept': 'application/json' };
    let requestBodyData: any = undefined;

    definition.executionParameters.forEach((param) => {
        const value = validatedArgs[param.name];
        if (typeof value !== 'undefined' && value !== null) {
            if (param.in === 'path') {
                urlPath = urlPath.replace(`{${param.name}}`, encodeURIComponent(String(value)));
            }
            else if (param.in === 'query') {
                queryParams[param.name] = value;
            }
            else if (param.in === 'header') {
                headers[param.name.toLowerCase()] = String(value);
            }
        }
    });

    if (urlPath.includes('{')) {
        throw new Error(`Failed to resolve path parameters: ${urlPath}`);
    }
    
    const requestUrl = API_BASE_URL ? `${API_BASE_URL}${urlPath}` : urlPath;

    if (definition.requestBodyContentType && typeof validatedArgs['requestBody'] !== 'undefined') {
        requestBodyData = validatedArgs['requestBody'];
        headers['content-type'] = definition.requestBodyContentType;
    }

    if (sensorTowerApiKey) {
        queryParams['auth_token'] = sensorTowerApiKey;
    } else {
        console.warn(`Tool '${toolName}' requires auth_token, but no API key was provided.`);
    }
    

    const config: AxiosRequestConfig = {
      method: definition.method.toUpperCase(), 
      url: requestUrl, 
      params: queryParams, 
      headers: headers,
      ...(requestBodyData !== undefined && { data: requestBodyData }),
    };

    console.error(`Executing tool "${toolName}": ${config.method} ${config.url}`);
    
    const response = await axios(config);

    let responseText = '';
    const contentType = String(response.headers['content-type'] ?? '').toLowerCase();
    
    if (contentType.includes('application/json') && typeof response.data === 'object' && response.data !== null) {
         try { 
             responseText = JSON.stringify(response.data, null, 2); 
         } catch (e) { 
             responseText = "[Stringify Error]"; 
         }
    } 
    else if (typeof response.data === 'string') { 
         responseText = response.data; 
    }
    else if (response.data !== undefined && response.data !== null) { 
         responseText = String(response.data); 
    }
    else { 
         responseText = `(Status: ${response.status} - No body content)`; 
    }
    
    return { 
        content: [ 
            { 
                type: "text", 
                text: `API Response (Status: ${response.status}):\n${responseText}` 
            } 
        ], 
    };

  } catch (error: unknown) {
    let errorMessage: string;
    
    if (axios.isAxiosError(error)) { 
        errorMessage = formatApiError(error); 
    }
    else if (error instanceof Error) { 
        errorMessage = error.message; 
    }
    else { 
        errorMessage = 'Unexpected error: ' + String(error); 
    }
    
    console.error(`Error during execution of tool '${toolName}':`, errorMessage);
    
    return { content: [{ type: "text", text: errorMessage }] };
  }
}


function getTransportMode(): 'stdio' | 'http' {
  const idx = process.argv.indexOf('--transport');
  if (idx !== -1 && process.argv[idx + 1]) {
    const mode = process.argv[idx + 1];
    if (mode === 'http' || mode === 'stdio') return mode;
    console.error(`Unknown transport "${mode}", falling back to stdio`);
  }
  return 'stdio';
}

function createMcpServerInstance(sensorTowerApiKey: string | undefined) {
  const mcp = new McpServer(
    { name: SERVER_NAME, version: SERVER_VERSION },
    { capabilities: { tools: {} } }
  );
  const srv = mcp.server;

  srv.setRequestHandler(ListToolsRequestSchema, async () => {
    const toolsForClient: Tool[] = Array.from(toolDefinitionMap.values()).map(def => ({
      name: def.name,
      description: def.description,
      inputSchema: def.inputSchema
    }));
    return { tools: toolsForClient };
  });

  srv.setRequestHandler(CallToolRequestSchema, async (request: CallToolRequest): Promise<CallToolResult> => {
    const { name: toolName, arguments: toolArgs } = request.params;
    const toolDefinition = toolDefinitionMap.get(toolName);
    if (!toolDefinition) {
      console.error(`Error: Unknown tool requested: ${toolName}`);
      return { content: [{ type: "text", text: `Error: Unknown tool requested: ${toolName}` }] };
    }
    return await executeApiTool(toolName, toolDefinition, toolArgs ?? {}, sensorTowerApiKey);
  });

  return mcp;
}

async function startStdio() {
  const apiKey = process.env.SENSOR_TOWER_API_KEY;
  if (!apiKey) {
    console.error('WARNING: SENSOR_TOWER_API_KEY is not set. API calls will fail.');
  }
  const mcp = createMcpServerInstance(apiKey);
  const transport = new StdioServerTransport();
  await mcp.connect(transport);
  console.error(`${SERVER_NAME} MCP Server (v${SERVER_VERSION}) running on stdio, proxying API at ${API_BASE_URL}`);
}

async function startHttp() {
  const app = express();
  app.use(express.json());

  app.post('/mcp', async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      res.status(401).json({ jsonrpc: '2.0', error: { code: -32000, message: 'Missing Authorization header. Use: Bearer <SENSOR_TOWER_API_KEY>' }, id: null });
      return;
    }
    const apiKey = authHeader.slice(7);
    const mcp = createMcpServerInstance(apiKey);
    try {
      const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
      await mcp.connect(transport);
      await transport.handleRequest(req, res, req.body);
      res.on('close', () => {
        transport.close();
        mcp.close();
      });
    } catch (error) {
      console.error('Error handling MCP request:', error);
      if (!res.headersSent) {
        res.status(500).json({ jsonrpc: '2.0', error: { code: -32603, message: 'Internal server error' }, id: null });
      }
    }
  });

  app.get('/mcp', (_req, res) => {
    res.status(405).json({ jsonrpc: '2.0', error: { code: -32000, message: 'Method not allowed.' }, id: null });
  });

  app.delete('/mcp', (_req, res) => {
    res.status(405).json({ jsonrpc: '2.0', error: { code: -32000, message: 'Method not allowed.' }, id: null });
  });

  const port = parseInt(process.env.PORT || '3000', 10);
  app.listen(port, () => {
    console.error(`${SERVER_NAME} MCP Server (v${SERVER_VERSION}) running on http://localhost:${port}/mcp, proxying API at ${API_BASE_URL}`);
  });
}

async function main() {
  const mode = getTransportMode();
  if (mode === 'http') {
    await startHttp();
  } else {
    await startStdio();
  }
}

process.on('SIGINT', () => { console.error("Shutting down MCP server..."); process.exit(0); });
process.on('SIGTERM', () => { console.error("Shutting down MCP server..."); process.exit(0); });

main().catch((error) => {
  console.error("Fatal error in main execution:", error);
  process.exit(1);
});

function formatApiError(error: AxiosError): string {
    let message = 'API request failed.';
    if (error.response) {
        message = `API Error: Status ${error.response.status} (${error.response.statusText || 'Status text not available'}). `;
        const responseData = error.response.data;
        const MAX_LEN = 200;
        if (typeof responseData === 'string') { 
            message += `Response: ${responseData.substring(0, MAX_LEN)}${responseData.length > MAX_LEN ? '...' : ''}`; 
        }
        else if (responseData) { 
            try { 
                const jsonString = JSON.stringify(responseData); 
                message += `Response: ${jsonString.substring(0, MAX_LEN)}${jsonString.length > MAX_LEN ? '...' : ''}`; 
            } catch { 
                message += 'Response: [Could not serialize data]'; 
            } 
        }
        else { 
            message += 'No response body received.'; 
        }
    } else if (error.request) {
        message = 'API Network Error: No response received from server.';
        if (error.code) message += ` (Code: ${error.code})`;
    } else { 
        message += `API Request Setup Error: ${error.message}`; 
    }
    return message;
}

function getZodSchemaFromJsonSchema(jsonSchema: any, toolName: string): z.ZodTypeAny {
    if (typeof jsonSchema !== 'object' || jsonSchema === null) { 
        return z.object({}).passthrough(); 
    }
    try {
        const zodSchemaString = jsonSchemaToZod(jsonSchema);
        const zodSchema = eval(zodSchemaString);
        if (typeof zodSchema?.parse !== 'function') { 
            throw new Error('Eval did not produce a valid Zod schema.'); 
        }
        return zodSchema as z.ZodTypeAny;
    } catch (err: any) {
        console.error(`Failed to generate/evaluate Zod schema for '${toolName}':`, err);
        return z.object({}).passthrough();
    }
}
