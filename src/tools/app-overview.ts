import type { McpToolDefinition } from '../types.js';

export const appOverviewTools: [string, McpToolDefinition][] = [
  ["search_entities", {
    name: "search_entities",
    description: `Search for apps and publishers by name, description, subtitle, promo text, in-app purchases, app ID, or Unified ID.

Use this tool first when you need to find the app_id for a given app name before calling other Sensor Tower tools (e.g. sales_report_estimates, usage_active_users).

Returns app_id, publisher info, categories, icon, and available countries for each match.

IMPORTANT — UNIFIED APP IDs: This tool only searches iOS or Android individually. It returns platform-specific app IDs (numeric for iOS, package name for Android), NOT unified app IDs. To get the unified app ID needed for cross-platform queries (e.g. sales_report_estimates with os="unified"), call this tool once on either platform, then pass the returned app_id to the unified_apps tool which will return the unified app ID along with all platform-specific IDs.

RECOMMENDED WORKFLOW for revenue/download queries:
1. Call search_entities (os="ios" or "android") to find the app
2. Call unified_apps with the app_id to get the unified app ID
3. Call sales_report_estimates with os="unified" and the unified app ID for accurate cross-platform totals`,
    inputSchema: {"type":"object","properties":{"os":{"default":"ios","enum":["ios","android"],"type":"string","description":"Operating System"},"term":{"type":"string","description":"Search term — app name, publisher name, app ID, or Unified ID"},"entity_type":{"default":"app","enum":["app","publisher"],"type":"string","description":"Type of entity to search for"},"limit":{"default":10,"type":"number","description":"Maximum number of results to return (default 10)"}},"required":["os","term"]},
    method: "get",
    pathTemplate: "/v1/{os}/search_entities",
    executionParameters: [{"name":"os","in":"path"},{"name":"term","in":"query"},{"name":"entity_type","in":"query"},{"name":"limit","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
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
