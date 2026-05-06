import type { McpToolDefinition } from '../types.js';

export const installMetricsTools: [string, McpToolDefinition][] = [
  ["getInstallMetrics", {
    name: "getInstallMetrics",
    description: `Get install base, penetration, and engagement metrics for mobile apps.

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
- \`region\` - Geographic breakdown
- \`device\` - Device type breakdown

### Supported combinations:

- \`date,app_id\` - Time series data by app
- \`date,region\` - Time series data by region
- \`date,device\` - Time series data by device
- \`app_id\` - Table-like breakdown by app
- \`region\` - Table-like breakdown by region
- \`device\` - Table-like breakdown by device

## Granularity
- \`date_granularity\`: How data is aggregated (day/week/month)

## Metrics
- \`est_install_base\` - Total number of devices with the app installed over the selected period. Shows the app's footprint, or how widely it has spread. Useful for benchmarking popularity, estimating market share, and seeing growth trends.
- \`est_install_penetration\` - Percentage of users in a given market who have the app installed during the selected period. Normalizes install base against the size of the market (e.g., within a country or device). This is especially useful for comparing apps of different scales as you can see not just raw installs, but how saturated the app is in its market.
- \`est_open_rate\` - Percentage of users who actually used the app during the selected period. This cuts through disengaged users and shows true active reach. For example, an app might be on lots of devices but rarely opened; usage penetration highlights that.
- \`est_usage_penetration\` - Percentage of the install base who opened the app during the selected period. A measure of engagement that helps assess stickiness — are people just downloading the app and leaving it, or do they return frequently?

## Notes

**Important:** This API might get updated in the future (next 6 months after release, see <a href="/api/docs/changelog">API Changelog</a>) as we continue to expand its functionality and support more metrics.
We recommend integrating with caution and monitoring release notes for upcoming changes.
`,
    inputSchema: {"type":"object","properties":{"metric":{"type":"string","enum":["est_install_base","est_install_penetration","est_open_rate","est_usage_penetration"],"description":"The metric to retrieve data for"},"breakdown":{"type":"array","items":{"type":"string","enum":["date","app_id","region","device"]},"minItems":1,"description":"How to break down the data (comma-separated for breakdown by multiple fields, e.g. `date,app_id`)"},"date_granularity":{"type":"string","enum":["day","week","month"],"description":"Date granularity for the data."},"start_date":{"type":"string","format":"date","description":"Start date for the data range. `YYYY-MM-DD` format"},"end_date":{"type":"string","format":"date","description":"End date for the data range. `YYYY-MM-DD` format"},"regions":{"type":"array","items":{"type":"string"},"minItems":1,"description":"Array of region codes to filter by (comma-separated), <a target='_blank' href='/api/docs/static/country_ids.json'>Region Codes</a>"},"app_ids":{"type":"array","items":{"type":"string"},"minItems":1,"description":"Array of app IDs to filter by. Can be iOS App IDs or Android App IDs."},"unified_app_ids":{"type":"array","items":{"type":"string"},"minItems":1,"description":"Array of unified app IDs to filter apps by (comma-separated). These are cross-platform app identifiers."}},"required":["metric","breakdown","date_granularity","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"metric","in":"query"},{"name":"breakdown","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"regions","in":"query"},{"name":"app_ids","in":"query"},{"name":"unified_app_ids","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
