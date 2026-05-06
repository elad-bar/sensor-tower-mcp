import type { McpToolDefinition } from '../types.js';

export const downloadsRevenueTools: [string, McpToolDefinition][] = [
  ["sales_report_estimates", {
    name: "sales_report_estimates",
    description: `Retrieve download and revenue estimates of apps by country and date.

RECOMMENDED WORKFLOW: For accurate cross-platform revenue totals, use os="unified" with a unified app ID (obtainable from the search_entities response or the unified_apps tool). This matches the Sensor Tower web UI numbers. Do NOT sum separate iOS + Android calls — the totals will be lower because iOS-only calls exclude iPad revenue and the unified model applies cross-platform deduplication.

RESPONSE FIELDS:
- When os="unified": unified_revenue (total cross-platform revenue in cents), unified_units (total downloads), plus per-device breakdowns: iphone_revenue, iphone_units, ipad_revenue, ipad_units, android_revenue, android_units.
- When os="ios": iu (iPhone downloads), ir (iPhone revenue in cents), au (iPad downloads), ar (iPad revenue in cents).
- When os="android": u (downloads), r (revenue in cents).
All revenues are returned in cents — divide by 100 for USD.

ID TYPES: When os="unified", pass a unified app ID (24-char hex string like "55c5025102ac64f9c0001f98"). When os="ios", pass a numeric App Store ID. When os="android", pass the package name.

At least one app_id or publisher_id is required.

Note: The latest day's Google Play estimates may change as more data becomes available for recalibration.

TIMEOUT HANDLING: If the API times out, segment by date range: daily = 1 week segments, weekly = 3 month segments, monthly = 1 year segments, quarterly = 2 year segments.`,
    inputSchema: {"type":"object","properties":{"os":{"default":"unified","enum":["ios","android","unified"],"type":"string","description":"Platform to query. Use 'unified' (recommended) for cross-platform totals matching the web UI — requires a unified app ID. Use 'ios' or 'android' only when you need single-platform data."},"app_ids":{"items":{"default":"","type":"string"},"type":"array","description":"App IDs. For os=unified: unified app ID (24-char hex). For os=ios: numeric App Store ID. For os=android: package name. Use unified_apps tool to convert between ID types."},"publisher_ids":{"type":"array","items":{"default":"","type":"string"},"description":"Publisher IDs of apps, separated by commas <span style='color: #FF0000'>(See implementation notes for specific implementations regarding Android publisher IDs)</span>"},"countries":{"default":["WW"],"type":"array","items":{"default":"","type":"string"},"description":"Specify the countries you want download / revenue for, separated by commas: <a target='_blank' href='/api/ios/sales_report_estimates/countries'>Itunes Country Codes</a> /  <a target='_blank' href='/api/android/sales_report_estimates/countries'>Android Country Codes</a> (use \"WW\" for worldwide)."},"date_granularity":{"default":"daily","enum":["daily","weekly","monthly","quarterly"],"type":"string","description":"Aggregate estimates by granularity (use \"daily\", \"weekly\", \"monthly\", or \"quarterly\") defaults to \"daily\""},"start_date":{"type":"string","format":"date","description":"Start Date, `YYYY-MM-DD` Format"},"end_date":{"type":"string","format":"date","description":"End Date, `YYYY-MM-DD` Format"},"rollup_descendant_estimates":{"default":false,"enum":[true,false],"type":"string","description":"Use company tree hierarchy to expand unified publishers (`unified` OS only) (default: `false`)"}},"required":["os","date_granularity","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/sales_report_estimates",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_ids","in":"query"},{"name":"publisher_ids","in":"query"},{"name":"countries","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"rollup_descendant_estimates","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
