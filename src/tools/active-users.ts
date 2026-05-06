import type { McpToolDefinition } from '../types.js';

export const activeUsersTools: [string, McpToolDefinition][] = [
  ["usage_active_users", {
    name: "usage_active_users",
    description: `Retrieve active user estimates of apps per country by date and time period.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android","unified"],"type":"string","description":"Operating System"},"app_ids":{"type":"array","items":{"default":"","type":"string"},"description":"IDs of apps, separated by commas. Maximum 500 app ids. With \"unified\" os use Unified App IDs.<br>If apps that do not meet <a target='_blank' href='https://help.sensortower.com/hc/en-us/articles/6985667275675-What-is-a-Disabled-Small-App-in-Usage-Intelligence-'> minimum requirements for usage estimates</a> are requested, they will not be taken into consideration."},"time_period":{"default":"day","enum":["day","week","month"],"type":"string","description":"Aggregate estimates by time period. Use \"day\" to get DAU, \"week\" for WAU, \"month\" for MAU."},"start_date":{"type":"string","format":"date","description":"Start Date, `YYYY-MM-DD` Format. <br> Auto-changes to the beginning of time_period. Note that weeks begin on Monday."},"end_date":{"type":"string","format":"date","description":"End Date, `YYYY-MM-DD` Format.<br> Auto-changes to the end of the specified time_period."},"countries":{"type":"array","items":{"default":"","type":"string"},"description":"Countries to return results for, separated by commas, <a target='_blank' href='/api/v1/usage/countries.json'>Country Codes</a>. <br> Also supports 'WW' code (Worldwide).\n"}},"required":["os","app_ids","time_period","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/usage/active_users",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_ids","in":"query"},{"name":"time_period","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"countries","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
