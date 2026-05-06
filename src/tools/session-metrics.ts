import type { McpToolDefinition } from '../types.js';

export const sessionMetricsTools: [string, McpToolDefinition][] = [
  ["session_metrics_timeseries", {
    name: "session_metrics_timeseries",
    description: `Retrieve session metrics data across a time series for Android or iOS apps. <br><br> Supported metrics include:
  - time_spent (seconds)
  - total_time_spent (seconds)
  - session_duration (seconds)
  - session_count
  - total_session_count`,
    inputSchema: {"type":"object","properties":{"start_date":{"default":"2023-01-01","format":"date","type":"string","description":"Start Date in `YYYY-MM-DD` format. Data is available from 2021-01-01 onward."},"end_date":{"default":"2023-02-01","format":"date","type":"string","description":"End Date in `YYYY-MM-DD` format."},"app_ids":{"type":"array","maxItems":100,"items":{"default":"","type":"string"},"description":"App IDs, separated by commas (maximum 100)."},"timeseries":{"type":"array","items":{"type":"string","enum":["time_spent","total_time_spent","session_duration","session_count","total_session_count"]},"description":"Time series metrics, separated by commas."},"regions":{"type":"array","items":{"default":"","type":"string"},"description":"Regions, separated by commas. All regions are included unless specified. <a target='_blank' href='/api/ios/usage/countries.json'>Region Codes</a>.\n"},"time_period":{"type":"string","enum":["day","week","month"],"description":"Specifies the session metrics time period.<br> Returns averaged session metrics for each period within a month.<br> Example: \"week\" = average session metrics per week, averaged over all weeks in a month.\n"},"date_granularity":{"default":"monthly","enum":["daily","weekly","monthly"],"type":"string","description":"Aggregate time series data by granularity (use \"daily\", \"weekly\" or \"monthly\")"},"breakdown":{"default":"app_id","type":"string","enum":["app_id","app_id,region"],"description":"Fields used for data aggregation, separated by commas.<br> The specified fields will be preserved in the response, while others will be aggregated.\n"}},"required":["start_date","end_date","app_ids","timeseries","time_period","date_granularity","breakdown"]},
    method: "get",
    pathTemplate: "/v1/apps/timeseries",
    executionParameters: [{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"app_ids","in":"query"},{"name":"timeseries","in":"query"},{"name":"regions","in":"query"},{"name":"time_period","in":"query"},{"name":"date_granularity","in":"query"},{"name":"breakdown","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["unified_session_metrics_timeseries", {
    name: "unified_session_metrics_timeseries",
    description: `Retrieve session metrics data across a time series for Unified Apps. <br> <i>Note: An optional OS filter is available, but responses are aggregated by unified app.</i> <br><br> Supported metrics include:
  - time_spent (seconds)
  - total_time_spent (seconds)
  - session_duration (seconds)
  - session_count
  - total_session_count`,
    inputSchema: {"type":"object","properties":{"start_date":{"default":"2023-01-01","format":"date","type":"string","description":"Start date in `YYYY-MM-DD` format. Data is available from 2021-01-01 onward."},"end_date":{"default":"2023-02-01","format":"date","type":"string","description":"End date in `YYYY-MM-DD` format."},"app_ids":{"type":"array","maxItems":100,"items":{"default":"","type":"string"},"description":"Unified app IDs, separated by commas (maximum 100)."},"timeseries":{"type":"array","items":{"type":"string","enum":["time_spent","total_time_spent","session_duration","session_count","total_session_count"]},"description":"Time series metrics, separated by commas."},"regions":{"type":"array","items":{"default":"","type":"string"},"description":"Regions, separated by commas. All regions are included unless specified. <a target='_blank' href='/api/ios/usage/countries.json'>Region Codes</a>.\n"},"time_period":{"type":"string","enum":["day","week","month"],"description":"Specifies the session metrics time period.<br> Returns averaged session metrics for each period within a month.<br> Example: \"week\" = average session metrics per week, averaged over all weeks in a month.\n"},"date_granularity":{"default":"monthly","enum":["daily","weekly","monthly"],"type":"string","description":"Aggregate time series data by granularity (use \"daily\", \"weekly\" or \"monthly\")"},"os":{"type":"string","enum":["ios","android"],"description":"Filter apps by platform."},"breakdown":{"default":"unified_app_id","type":"string","enum":["unified_app_id","unified_app_id,region"],"description":"Fields used for data aggregation, separated by commas.<br> The specified fields will be preserved in the response, while others will be aggregated.\n"}},"required":["start_date","end_date","app_ids","timeseries","date_granularity","breakdown"]},
    method: "get",
    pathTemplate: "/v1/apps/timeseries/unified_apps",
    executionParameters: [{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"app_ids","in":"query"},{"name":"timeseries","in":"query"},{"name":"regions","in":"query"},{"name":"time_period","in":"query"},{"name":"date_granularity","in":"query"},{"name":"os","in":"query"},{"name":"breakdown","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
