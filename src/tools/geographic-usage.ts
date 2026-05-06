import type { McpToolDefinition } from '../types.js';

export const geographicUsageTools: [string, McpToolDefinition][] = [
  ["metro_active_users", {
    name: "metro_active_users",
    description: `Get metro active user for mobile apps.

## Usage
- **Required**:
  - \`breakdown\`
  - \`date_granularity\`
  - \`start_date\`
  - \`end_date\`
- **Exactly one \`metric\`**
- **Exactly one entity filter**:
  - \`app_ids\`
  - \`unified_app_ids\`
- **Multiple entity filters**: are not supported

## Breakdowns

Comma-separated list of breakdowns.

### Available breakdowns

- \`date\` - Time series data
- \`app_id\` - Per-app breakdown
- \`metro_id\` - Geographic breakdown
- \`device\` - Device type breakdown

### Supported combinations:

- \`date,app_id\` - Time series data by app
- \`date,metro_id\` - Time series data by metropolis
- \`date,device\` - Time series data by device
- \`app_id\` - Table-like breakdown by app
- \`metro_id\` - Table-like breakdown by metropolis
- \`device\` - Table-like breakdown by device

## Granularity
- \`date_granularity\`: How data is aggregated (week/month)

## Metrics
- \`est_metro_active_users\` - active user estimates of apps

## Notes

**Important:** This API might get updated in the future (next 6 months after release, see <a href="/api/docs/changelog">API Changelog</a>) as we continue to expand its functionality and support more metrics.
We recommend integrating with caution and monitoring release notes for upcoming changes.
`,
    inputSchema: {"type":"object","properties":{"metric":{"type":"string","enum":["est_metro_active_users"],"description":"The metric to retrieve data for"},"breakdown":{"type":"array","items":{"type":"string","enum":["date","app_id","metro_id","device"]},"minItems":1,"description":"How to break down the data (comma-separated for breakdown by multiple fields, e.g. `date,app_id`)"},"date_granularity":{"type":"string","enum":["week","month"],"description":"Date granularity for the data."},"start_date":{"type":"string","format":"date","description":"Start date for the data range. `YYYY-MM-DD` format"},"end_date":{"type":"string","format":"date","description":"End date for the data range. `YYYY-MM-DD` format"},"metro_ids":{"type":"array","items":{"type":"number"},"minItems":1,"description":"Array of metropolis ids to filter by (comma-separated), <a target='_blank' href='/api/docs/static/metro_ids.json'>Metro IDs</a>"},"app_ids":{"type":"array","items":{"type":"string"},"minItems":1,"description":"Array of app IDs to filter by. Can be iOS App IDs or Android App IDs."},"unified_app_ids":{"type":"array","items":{"type":"string"},"minItems":1,"description":"Array of unified app IDs to filter apps by (comma-separated). These are cross-platform app identifiers."},"devices":{"type":"string","enum":["iphone","ipad","android"],"description":"Array of device types to filter by (comma-separated)"}},"required":["metric","breakdown","date_granularity","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"metric","in":"query"},{"name":"breakdown","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"metro_ids","in":"query"},{"name":"app_ids","in":"query"},{"name":"unified_app_ids","in":"query"},{"name":"devices","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["state_active_users", {
    name: "state_active_users",
    description: `Get state active users for mobile apps.

## Usage
- **Required**:
  - \`breakdown\`
  - \`date_granularity\`
  - \`start_date\`
  - \`end_date\`
- **Exactly one \`metric\`**
- **Exactly one entity filter**:
  - \`app_ids\`
  - \`unified_app_ids\`
- **Multiple entity filters**: are not supported

## Breakdowns

Comma-separated list of breakdowns.

### Available breakdowns

- \`date\` - Time series data
- \`app_id\` - Per-app breakdown
- \`state\` - Geographic breakdown by US state
- \`device\` - Device type breakdown

### Supported combinations:

- \`date,app_id\` - Time series data by app
- \`date,state\` - Time series data by state
- \`date,device\` - Time series data by device
- \`app_id\` - Table-like breakdown by app
- \`state\` - Table-like breakdown by state
- \`device\` - Table-like breakdown by device

## Granularity
- \`date_granularity\`: How data is aggregated (week/month)

## Metrics
- \`est_state_active_users\` - active user estimates of apps by state

## Notes

**Important:** This API might get updated in the future (next 6 months after release, see <a href="/api/docs/changelog">API Changelog</a>) as we continue to expand its functionality and support more metrics.
We recommend integrating with caution and monitoring release notes for upcoming changes.
`,
    inputSchema: {"type":"object","properties":{"metric":{"type":"string","enum":["est_state_active_users"],"description":"The metric to retrieve data for"},"breakdown":{"type":"array","items":{"type":"string","enum":["date","app_id","state","device"]},"minItems":1,"description":"How to break down the data (comma-separated for breakdown by multiple fields, e.g. `date,app_id`)"},"date_granularity":{"type":"string","enum":["week","month"],"description":"Date granularity for the data."},"start_date":{"type":"string","format":"date","description":"Start date for the data range. `YYYY-MM-DD` format"},"end_date":{"type":"string","format":"date","description":"End date for the data range. `YYYY-MM-DD` format"},"states":{"type":"array","items":{"type":"string"},"minItems":1,"description":"Array of state codes to filter by (comma-separated), <a target='_blank' href='/api/docs/static/states.json'>State Codes</a>"},"app_ids":{"type":"array","items":{"type":"string"},"minItems":1,"description":"Array of app IDs to filter by. Can be iOS App IDs or Android App IDs."},"unified_app_ids":{"type":"array","items":{"type":"string"},"minItems":1,"description":"Array of unified app IDs to filter apps by (comma-separated). These are cross-platform app identifiers."},"devices":{"type":"array","items":{"type":"string","enum":["iphone","ipad","android"]},"description":"Array of device types to filter by (comma-separated)"}},"required":["metric","breakdown","date_granularity","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"metric","in":"query"},{"name":"breakdown","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"states","in":"query"},{"name":"app_ids","in":"query"},{"name":"unified_app_ids","in":"query"},{"name":"devices","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
