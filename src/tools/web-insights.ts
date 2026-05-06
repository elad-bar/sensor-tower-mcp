import type { McpToolDefinition } from '../types.js';

export const webInsightsTools: [string, McpToolDefinition][] = [
  ["website_device_overlap", {
    name: "website_device_overlap",
    description: `Fetch website device overlap metrics showing visitor distribution across devices.`,
    inputSchema: {"type":"object","properties":{"bundle":{"type":"string","enum":["website_device_overlap"],"description":"Metric bundle type"},"breakdown":{"type":"string","description":"How to break down the data"},"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"},"website_ids":{"type":"array","items":{"type":"string"},"description":"Array of website IDs to retrieve metrics for"},"date_granularity":{"type":"string","enum":["day","week","month"],"description":"Date granularity for the data"}},"required":["bundle","breakdown","start_date","end_date","website_ids"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"website_ids","in":"query"},{"name":"date_granularity","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["website_duration", {
    name: "website_duration",
    description: `Fetch website visit duration metrics.`,
    inputSchema: {"type":"object","properties":{"bundle":{"type":"string","enum":["website_duration"],"description":"Metric bundle type"},"breakdown":{"type":"string","description":"How to break down the data"},"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"},"website_ids":{"type":"array","items":{"type":"string"},"description":"Array of website IDs to retrieve metrics for"},"date_granularity":{"type":"string","enum":["day","week","month"],"description":"Date granularity for the data"},"regions":{"type":"array","items":{"type":"string"},"description":"Array of region codes to filter by"}},"required":["bundle","breakdown","start_date","end_date","website_ids"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"website_ids","in":"query"},{"name":"date_granularity","in":"query"},{"name":"regions","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["top_websites", {
    name: "top_websites",
    description: `Fetch top websites by traffic metrics.`,
    inputSchema: {"type":"object","properties":{"bundle":{"type":"string","enum":["top_websites"],"description":"Metric bundle type"},"breakdown":{"type":"string","description":"How to break down the data"},"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"},"date_granularity":{"type":"string","enum":["day","week","month"],"description":"Date granularity for the data"},"regions":{"type":"array","items":{"type":"string"},"description":"Array of region codes to filter by"},"limit":{"type":"number","description":"Maximum number of results to return"},"offset":{"type":"number","description":"Number of results to skip for pagination"}},"required":["bundle","breakdown","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"date_granularity","in":"query"},{"name":"regions","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["website_visits", {
    name: "website_visits",
    description: `Fetch website visit metrics including unique visitors and page views.`,
    inputSchema: {"type":"object","properties":{"bundle":{"type":"string","enum":["website_visits"],"description":"Metric bundle type"},"breakdown":{"type":"string","description":"How to break down the data"},"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"},"website_ids":{"type":"array","items":{"type":"string"},"description":"Array of website IDs to retrieve metrics for"},"date_granularity":{"type":"string","enum":["day","week","month"],"description":"Date granularity for the data"},"regions":{"type":"array","items":{"type":"string"},"description":"Array of region codes to filter by"}},"required":["bundle","breakdown","start_date","end_date","website_ids"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"website_ids","in":"query"},{"name":"date_granularity","in":"query"},{"name":"regions","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["website_paths", {
    name: "website_paths",
    description: `Fetch website path metrics for user journey analysis.`,
    inputSchema: {"type":"object","properties":{"bundle":{"type":"string","enum":["website_paths"],"description":"Metric bundle type"},"breakdown":{"type":"string","description":"How to break down the data"},"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"},"website_ids":{"type":"array","items":{"type":"string"},"description":"Array of website IDs to retrieve metrics for"},"date_granularity":{"type":"string","enum":["day","week","month"],"description":"Date granularity for the data"}},"required":["bundle","breakdown","start_date","end_date","website_ids"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"website_ids","in":"query"},{"name":"date_granularity","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["website_traffic_channels", {
    name: "website_traffic_channels",
    description: `Fetch website traffic channel breakdown metrics.`,
    inputSchema: {"type":"object","properties":{"bundle":{"type":"string","enum":["website_traffic_channels"],"description":"Metric bundle type"},"breakdown":{"type":"string","description":"How to break down the data"},"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"},"website_ids":{"type":"array","items":{"type":"string"},"description":"Array of website IDs to retrieve metrics for"},"date_granularity":{"type":"string","enum":["day","week","month"],"description":"Date granularity for the data"},"regions":{"type":"array","items":{"type":"string"},"description":"Array of region codes to filter by"}},"required":["bundle","breakdown","start_date","end_date","website_ids"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"website_ids","in":"query"},{"name":"date_granularity","in":"query"},{"name":"regions","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["website_traffic_flow", {
    name: "website_traffic_flow",
    description: `Fetch website traffic flow metrics showing referral and destination patterns.`,
    inputSchema: {"type":"object","properties":{"bundle":{"type":"string","enum":["website_traffic_flow"],"description":"Metric bundle type"},"breakdown":{"type":"string","description":"How to break down the data"},"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"},"website_ids":{"type":"array","items":{"type":"string"},"description":"Array of website IDs to retrieve metrics for"},"date_granularity":{"type":"string","enum":["day","week","month"],"description":"Date granularity for the data"}},"required":["bundle","breakdown","start_date","end_date","website_ids"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"website_ids","in":"query"},{"name":"date_granularity","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["website_top_paths", {
    name: "website_top_paths",
    description: `Fetch top website paths by traffic.`,
    inputSchema: {"type":"object","properties":{"bundle":{"type":"string","enum":["website_top_paths"],"description":"Metric bundle type"},"breakdown":{"type":"string","description":"How to break down the data"},"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"},"website_ids":{"type":"array","items":{"type":"string"},"description":"Array of website IDs to retrieve metrics for"},"date_granularity":{"type":"string","enum":["day","week","month"],"description":"Date granularity for the data"},"limit":{"type":"number","description":"Maximum number of results to return"},"offset":{"type":"number","description":"Number of results to skip for pagination"}},"required":["bundle","breakdown","start_date","end_date","website_ids"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"website_ids","in":"query"},{"name":"date_granularity","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["gen_ai_citations", {
    name: "gen_ai_citations",
    description: `Fetch Gen AI citation metrics for websites showing how often they are referenced by AI models.`,
    inputSchema: {"type":"object","properties":{"bundle":{"type":"string","enum":["gen_ai_citations"],"description":"Metric bundle type"},"breakdown":{"type":"string","description":"How to break down the data"},"start_date":{"type":"string","format":"date","description":"Start date in YYYY-MM-DD format"},"end_date":{"type":"string","format":"date","description":"End date in YYYY-MM-DD format"},"website_ids":{"type":"array","items":{"type":"string"},"description":"Array of website IDs to retrieve metrics for"},"date_granularity":{"type":"string","enum":["day","week","month"],"description":"Date granularity for the data"}},"required":["bundle","breakdown","start_date","end_date","website_ids"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"website_ids","in":"query"},{"name":"date_granularity","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
