import type { McpToolDefinition } from '../types.js';

export const yourMetricsTools: [string, McpToolDefinition][] = [
  ["my_app_analytics", {
    name: "my_app_analytics",
    description: `Retrieve App Store analytics report for your connected apps (requires App Store Connect integration).`,
    inputSchema: {"type":"object","properties":{"app_id":{"type":"string","description":"App ID of the app to retrieve analytics for"},"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"},"date_granularity":{"type":"string","enum":["daily","weekly","monthly"],"description":"Date granularity for the data"},"measures":{"type":"array","items":{"type":"string"},"description":"Array of measure names to retrieve"}},"required":["app_id","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/ios/sales_reports/analytics_metrics",
    executionParameters: [{"name":"app_id","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"date_granularity","in":"query"},{"name":"measures","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["my_sources_metrics", {
    name: "my_sources_metrics",
    description: `Retrieve App Store metrics by source type for your connected apps.`,
    inputSchema: {"type":"object","properties":{"app_id":{"type":"string","description":"App ID of the app to retrieve source metrics for"},"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"},"date_granularity":{"type":"string","enum":["daily","weekly","monthly"],"description":"Date granularity for the data"},"source_type":{"type":"string","description":"Source type to filter by"}},"required":["app_id","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/ios/sales_reports/sources_metrics",
    executionParameters: [{"name":"app_id","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"date_granularity","in":"query"},{"name":"source_type","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["my_sales_reports", {
    name: "my_sales_reports",
    description: `Retrieve downloads and revenue sales reports for your connected apps.`,
    inputSchema: {"type":"object","properties":{"os":{"type":"string","enum":["ios","android"],"description":"Operating system"},"app_ids":{"type":"array","items":{"type":"string"},"description":"Array of app IDs to retrieve sales reports for"},"countries":{"type":"array","items":{"type":"string"},"default":["WW"],"description":"Array of country codes (defaults to WW)"},"date_granularity":{"type":"string","enum":["daily","weekly","monthly","quarterly"],"default":"daily","description":"Date granularity for the data (defaults to daily)"},"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"}},"required":["os","app_ids","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/sales_reports",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_ids","in":"query"},{"name":"countries","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["unified_sales_reports", {
    name: "unified_sales_reports",
    description: `Retrieve unified downloads and revenue sales reports for your connected apps across platforms.`,
    inputSchema: {"type":"object","properties":{"app_ids":{"type":"array","items":{"type":"string"},"description":"Array of app IDs to retrieve unified sales reports for"},"countries":{"type":"array","items":{"type":"string"},"default":["WW"],"description":"Array of country codes (defaults to WW)"},"date_granularity":{"type":"string","enum":["daily","weekly","monthly","quarterly"],"default":"daily","description":"Date granularity for the data (defaults to daily)"},"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"}},"required":["app_ids","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/unified/sales_reports",
    executionParameters: [{"name":"app_ids","in":"query"},{"name":"countries","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["api_usage", {
    name: "api_usage",
    description: `Retrieve your Sensor Tower API usage metrics.`,
    inputSchema: {"type":"object","properties":{"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"}}},
    method: "get",
    pathTemplate: "/v1/api_usage",
    executionParameters: [{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
