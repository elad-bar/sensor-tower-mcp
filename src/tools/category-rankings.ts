import type { McpToolDefinition } from '../types.js';

export const categoryRankingsTools: [string, McpToolDefinition][] = [
  ["category_history", {
    name: "category_history",
    description: `Retrieve historical ranking information for a particular app, category, and chart type. You can request data for multiple apps, categories, chart types, and countries. Please refer to the parameter's description for more information.`,
    inputSchema: {"type":"object","properties":{"os":{"default":"ios","enum":["ios","android"],"type":"string","description":"Operating System"},"app_ids":{"type":"array","items":{"default":"","type":"string"},"description":"IDs of Apps (separated by commas)"},"category":{"type":"string","description":"Category ID to return results for (<a target='_blank' href='/api/docs/static/category_ids.json'>Category Ids</a>)."},"chart_type_ids":{"type":"array","items":{"default":"","type":"string"},"description":"IDs of the Chart Type, separated by commas <br> <a target='_blank' href='/api/docs/static/chart_type_ids.json'>\n  Chart Type Ids Mapping\n</a>"},"countries":{"type":"array","items":{"default":"","type":"string"},"description":"Specify the countries you want download rankings for, separated by commas <br> <a target='_blank' href='/api/docs/static/country_ids.json'>Country Codes</a>"},"start_date":{"type":"string","format":"date","description":"Start Date, `YYYY-MM-DD` format (defaults to 90 days ago)"},"end_date":{"type":"string","format":"date","description":"End Date, `YYYY-MM-DD` format (defaults to today)"},"is_hourly":{"default":false,"type":"boolean","description":"Hourly rankings (only for iOS)"}},"required":["os","app_ids","category","chart_type_ids","countries"]},
    method: "get",
    pathTemplate: "/v1/{os}/category/category_history",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_ids","in":"query"},{"name":"category","in":"query"},{"name":"chart_type_ids","in":"query"},{"name":"countries","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"is_hourly","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["category_ranking_summary", {
    name: "category_ranking_summary",
    description: `Retrieve today's category ranking summary for a particular app with data on chart type, category, and rank.`,
    inputSchema: {"type":"object","properties":{"os":{"default":"ios","enum":["ios","android"],"type":"string","description":"Operating System"},"app_id":{"type":"string","description":"ID of App"},"country":{"default":"US","type":"string","description":"Specify the country you want download rankings for, <a target='_blank' href='/api/docs/static/country_ids.json'>Country Codes</a>"}},"required":["os","app_id","country"]},
    method: "get",
    pathTemplate: "/v1/{os}/category/category_ranking_summary",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_id","in":"query"},{"name":"country","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
