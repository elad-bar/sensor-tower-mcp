import type { McpToolDefinition } from '../types.js';

export const appUpdatesTools: [string, McpToolDefinition][] = [
  ["app_update_timeline", {
    name: "app_update_timeline",
    description: `Retrieve detailed app update history for a particular app, with information such as update version, summary, price, description, and screenshots. The app's information will also be returned in the response. <br><br> <strong>Note:</strong> Not all update information are available historically. See <a target='blank' href='/api/docs/static/app_update_type_start_dates.json'>
  App Update Type Start Dates
</a> for information on when the earliest update history is available for each update type.`,
    inputSchema: {"type":"object","properties":{"os":{"default":"ios","enum":["ios","android"],"type":"string","description":"Operating System"},"app_id":{"type":"string","description":"ID of App"},"country":{"type":"string","description":"Specify the country you want update history for, <a target='_blank' href='/api/docs/static/country_ids.json'>\n  Country Codes\n</a> (defaults to \"US\")"},"date_limit":{"default":10,"type":"number","description":"Number of days from today to start the update timeline"}},"required":["os","app_id"]},
    method: "get",
    pathTemplate: "/v1/{os}/app_update/get_app_update_history",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_id","in":"query"},{"name":"country","in":"query"},{"name":"date_limit","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["version_history", {
    name: "version_history",
    description: `Retrieve version history for a particular app, with update versions and release notes. The app's information will also be returned in the response.`,
    inputSchema: {"type":"object","properties":{"os":{"default":"ios","enum":["ios","android"],"type":"string","description":"Operating System"},"app_id":{"type":"string","description":"ID of App"},"country":{"type":"string","description":"Specify the country you want update history for,\n<a target='_blank' href='/api/docs/static/country_ids.json'>Country Codes</a>\n(defaults to \"US\")"}},"required":["os","app_id"]},
    method: "get",
    pathTemplate: "/v1/{os}/apps/version_history",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_id","in":"query"},{"name":"country","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
