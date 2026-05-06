import type { McpToolDefinition } from '../types.js';

export const appOverviewTools: [string, McpToolDefinition][] = [
  ["apps", {
    name: "apps",
    description: `<p>Retrieve app metadata, such as app name, publisher, categories,
description, screenshots, rating, etc.</p>
<p>Limit: <code>100</code> app_ids per call</p>
`,
    inputSchema: {"type":"object","properties":{"os":{"default":"ios","enum":["ios","android"],"type":"string","description":"Operating System"},"app_ids":{"type":"array","items":{"default":"","type":"string"},"description":"App IDs of apps, separated by commas (limited to 100)"},"country":{"default":"US","type":"string","description":"Country Code,\n<a target='_blank' href='/api/docs/static/country_ids.json'>Country Codes</a>\n(defaults to \"US\")"},"include_sdk_data":{"default":false,"type":"boolean","description":"Include SDK Insights data (requires subscription)"}},"required":["os","app_ids"]},
    method: "get",
    pathTemplate: "/v1/{os}/apps",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_ids","in":"query"},{"name":"country","in":"query"},{"name":"include_sdk_data","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["top_in_app_purchases", {
    name: "top_in_app_purchases",
    description: `<p>Retrieve top in-app purchases for the requested App IDs.</p>
<p>Limit: 100 <code>app_ids</code> per call</p>
`,
    inputSchema: {"type":"object","properties":{"app_ids":{"type":"array","items":{"default":"","type":"string"},"description":"App IDs of apps, separated by commas (limited to 100)"},"country":{"type":"string","description":"Specify the country you want update history for,\n              <a target='_blank' href='/api/docs/static/country_ids.json'>Country Codes</a> (defaults to \"US\")"}},"required":["app_ids"]},
    method: "get",
    pathTemplate: "/v1/ios/apps/top_in_app_purchases",
    executionParameters: [{"name":"app_ids","in":"query"},{"name":"country","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
