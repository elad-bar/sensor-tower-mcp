import type { McpToolDefinition } from '../types.js';

export const acquisitionChurnTools: [string, McpToolDefinition][] = [
  ["app_analysis_retention", {
    name: "app_analysis_retention",
    description: `<b>Sunset date: April 22, 2026</b><br><br>
Retrieve retention of apps (from day 1 to day 90), along with the baseline retention. <br><br> Mapping between confidence levels and their respective confidence color in the UI: <br> <table>
  <tr>
    <td>UI Color</td>
    <td>Confidence Level</td>
  </tr>
  <tr>
    <td>red</td><td> &lt= 3</td>
  </tr>
  <tr>
    <td>yellow</td><td>4 - 6</td>
  </tr>
  <tr>
    <td>green</td><td> &gt= 7</td>
  </tr>
</table>
`,
    inputSchema: {"type":"object","properties":{"os":{"default":"ios","enum":["ios","android"],"type":"string","description":"Operating System"},"app_ids":{"type":"array","items":{"default":"","type":"string"},"description":"IDs of apps, separated by commas. Maximum 500 app ids.<br>If apps that do not meet  <a target='_blank' href='https://help.sensortower.com/hc/en-us/articles/6985667275675-What-is-a-Disabled-Small-App-in-Usage-Intelligence-'> minimum requirements for usage estimates</a> are requested, they will not be taken into consideration; their IDs can be found in the disabled_app_ids field."},"date_granularity":{"default":"all_time","enum":["all_time","quarterly"],"type":"string","description":" Aggregate estimates by granularity (use \"all_time\", or \"quarterly\") "},"start_date":{"type":"string","format":"date","description":"Start Date, `YYYY-MM-DD` Format"},"end_date":{"type":"string","format":"date","description":"End Date, `YYYY-MM-DD` Format. If specified, all date periods between start_date and end_date are to be returned. E.g. if 'date_granularity' is set to 'quarterly', 'start_date' is '2021-01-01' and 'end_date' is '2021-08-01', response will contain data for Q1, Q2 and Q3 of 2021. If 'date_granularity' is set to 'all_time', 'end_date' parameter is ignored."},"country":{"type":"string","description":"Country (<a target='_blank' href='/api/v1/usage/countries.json'>country codes</a>) or region (<a target='_blank' href='/api/v1/usage/regions.json'>region codes</a>) to return results for. (Leave blank for Worldwide.) <br> Quarterly regional and country data begins in Q1 2021. Worldwide and All Time data goes back to Q4 2015.\n"}},"required":["os","app_ids","date_granularity","start_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/usage/retention",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_ids","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"country","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["download_channels", {
    name: "download_channels",
    description: `Fetch percentages and absolute values for all five download sources: organic browse, organic search, paid ads, paid search and browser. The fields organic_abs and organic_frac have become legacy fields and are no longer calculated independently. Instead, they now represent the sum of their respective organic_browse and organic_search fields. <br> Regardless of the OS parameter, this endpoint only accepts Unified app IDs and returns data grouped by Unified app IDs.`,
    inputSchema: {"type":"object","properties":{"os":{"default":"unified","enum":["ios","android","unified"],"type":"string","description":"Operating System. This parameter doesn't affect app_ids. It always expects Unified apps IDs. <br> If \"Android\" or \"iOS\" is selected, only apps from this platform will be taken into account."},"app_ids":{"items":{"default":"","type":"string"},"type":"array","description":"Unified app IDs, separated by commas"},"countries":{"type":"array","items":{"default":"","type":"string"},"description":"Country codes, separated by commas. For worldwide data, use 'WW'. <br> Note that this product leverages the set of worldwide countries available in Google Play, which notably excludes China. <br> <a target='_blank' href='/api/docs/static/country_ids.json'>Country Codes</a>."},"date_granularity":{"default":"monthly","enum":["daily","monthly"],"type":"string","description":"Aggregate estimates by granularity (use \"daily\" or \"monthly\"). Defaults to \"monthly\"."},"start_date":{"type":"string","format":"date","description":"Start Date, `YYYY-MM-DD` Format"},"end_date":{"type":"string","format":"date","description":"End Date, `YYYY-MM-DD` Format"}},"required":["os","app_ids","countries","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/downloads_by_sources",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_ids","in":"query"},{"name":"countries","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["churn_analysis", {
    name: "churn_analysis",
    description: `Fetches app churn rate as well as active user breakdown metrics (percentage of new, resurrected, and retained users). <br> <br> <strong>Note:</strong> There may be gaps in the data in which case null values will be given.
`,
    inputSchema: {"type":"object","properties":{"os":{"default":"android","enum":["android"],"type":"string","description":"Operating System"},"selection_cohort_ids":{"type":"array","items":{"default":"","type":"string"},"description":"IDs of selection cohorts, separated by commas. (Max: 5) <br> Can be queried with <a href=\"/api/docs/app_analysis#/ACQUISITION%20%26%20CHURN%3A%20Acquisition%20%26%20Churn/churn_analysis_cohorts\" target=\"_blank\">\n  Churn Analysis Cohorts\n</a>\n"},"country":{"type":"string","enum":["LATIN_AM","SE_ASIA","TIER_1","US","JP","IN"],"description":"Country to return results for (leave blank for Worldwide)"},"granularity":{"default":"monthly","enum":["monthly"],"type":"string","description":"Churn Analysis by granularity"},"start_date":{"default":"2020-05-01","format":"date","type":"string","description":"Start Date, `YYYY-MM-DD` Format (minimum date: 2020-05-01)"},"end_date":{"default":"2020-05-31","format":"date","type":"string","description":"End Date, `YYYY-MM-DD` Format"}},"required":["os","selection_cohort_ids","granularity","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/consumer_intel/churn_analysis",
    executionParameters: [{"name":"os","in":"path"},{"name":"selection_cohort_ids","in":"query"},{"name":"country","in":"query"},{"name":"granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["churn_analysis_cohorts", {
    name: "churn_analysis_cohorts",
    description: `Fetches the available cohorts.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["android"],"type":"string","description":"Operating System"}},"required":["os"]},
    method: "get",
    pathTemplate: "/v1/{os}/consumer_intel/churn_analysis/cohorts",
    executionParameters: [{"name":"os","in":"path"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["cohort_retention", {
    name: "cohort_retention",
    description: `Fetches the cohort retention from a specific subset of panel users.`,
    inputSchema: {"type":"object","properties":{"os":{"default":"android","enum":["android"],"type":"string","description":"Operating System"},"selection_cohort_ids":{"type":"array","items":{"default":"","type":"string"},"description":"IDs of selection cohorts, separated by commas. (Max: 5) <br> Can be queried with <a href=\"/api/docs/app_analysis#/ACQUISITION%20%26%20CHURN%3A%20Acquisition%20%26%20Churn/cohort_retention_cohorts\" target=\"_blank\">\n  Cohort Retention Cohorts\n</a>\n"},"granularity":{"default":"weekly","enum":["weekly","monthly"],"type":"string","description":"Retention by granularity"},"start_date":{"default":"2020-03-30","format":"date","type":"string","description":"Start Date, `YYYY-MM-DD` Format (minimum date: 2020-03-30)"},"end_date":{"default":"2020-04-27","format":"date","type":"string","description":"End Date, `YYYY-MM-DD` Format"}},"required":["os","selection_cohort_ids","granularity","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/consumer_intel/cohort_retention",
    executionParameters: [{"name":"os","in":"path"},{"name":"selection_cohort_ids","in":"query"},{"name":"granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["cohort_retention_cohorts", {
    name: "cohort_retention_cohorts",
    description: `Fetches the available cohorts.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["android"],"type":"string","description":"Operating System"}},"required":["os"]},
    method: "get",
    pathTemplate: "/v1/{os}/consumer_intel/cohort_retention/cohorts",
    executionParameters: [{"name":"os","in":"path"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["getRetentionMetrics", {
    name: "getRetentionMetrics",
    description: `Retrieve retention metrics for apps.

The following retention periods are available:
- daily (D1..D7, D14, D30, D60, D90, D180, D360)
- weekly (W1..W10, W20, W52)
- monthly (M1..M12)

Retention is calculated at a monthly granularity, which means the install day
(or the start of the install week) must fall within the specified month.

## Usage
- **Required parameters**:
  - \`bundle\`
  - \`breakdown\`
  - \`start_date\`
  - \`end_date\`
- **Optional parameters**:
  - \`regions\`
- Exactly one \`bundle\` must be provided.
- Exactly one entity filter must be provided:
  - \`app_ids\`
  - \`unified_app_ids\`
- Multiple entity filters are not supported.

## Retention Period
- \`bundle\`: The bundle determines retention period (retention_daily,
  retention_weekly, or retention_monthly) and includes all retention metrics
  relevant to that retention period.

## Metrics
- \`est_retention_<P><MO>\`, where \`<P>\` is the Retention Period like D, W, M, and \`<MO>\` is the Metric Option.

  Examples:
  - \`est_retention_d7\` — estimated retention on the 7th day after
    installation (installation day is considered D0).
  - \`est_retention_w5\` — estimated retention on the 5th week after the
    installation week (installation week is considered W0).
  - \`est_retention_m3\` — estimated retention in the 3rd month after the
    installation month (installation month is considered M0).

- Note: we do not return future estimates.
  - For example, if daily retention is requested for the most recent *complete*
    month, there will be no estimates beyond D30.
  - Since the installation day is D0, if the month has 30 days a D30
    estimate will not be available for installs that happened on the first
    day of the month.
  - If an app was released in the middle of the most recent complete
    month, the retention curve may be shorter.
  - If an app was disabled, we do not return estimates that fall after the
    deactivation date.

## Breakdowns

Provide a comma-separated list of breakdown fields.

### Available breakdowns

- \`date\` — time series data
- \`app_id\` — per-app breakdown
- \`unified_app_id\` — per-unified-app breakdown

### Supported combinations

- \`date,unified_app_id,app_id\` — time series by app
- \`date,unified_app_id\` — time series by unified app
- \`date,app_id\` — time series by app
- \`unified_app_id,app_id\` — table-like breakdown by app
- \`unified_app_id\` — table-like breakdown by unified app
- \`app_id\` — table-like breakdown by app
- \`date\` — time series across all requested apps

### Regions
- When no \`regions\` parameter is provided, estimates are returned worldwide.
- When one or more \`regions\` are provided, estimates are filtered to those regions.
- Breakdown by region is not supported.
- All estimates are weighted by regional MAU when aggregating.
- If an app is not released in a region, there will be no estimates for that
  region and it will not contribute to the weighted average.

## Notes

**Important:** This API may be updated in the future (see the
<a href="/api/docs/changelog">API Changelog</a>). Please integrate with
caution and monitor release notes for changes.
`,
    inputSchema: {"type":"object","properties":{"bundle":{"type":"string","enum":["retention_daily","retention_weekly","retention_monthly"],"description":"Bundle determines retention period for the data."},"breakdown":{"type":"array","items":{"type":"string","enum":["date","app_id","unified_app_id"]},"minItems":1,"description":"How to break down the data (comma-separated for multiple fields, e.g. `date,app_id`)."},"start_date":{"type":"string","format":"date","description":"Start date for the data range (YYYY-MM-DD)."},"end_date":{"type":"string","format":"date","description":"End date for the data range (YYYY-MM-DD)."},"regions":{"type":"array","items":{"type":"string"},"minItems":1,"description":"Array of region codes to filter by (comma-separated). See <a target='_blank' href='/api/docs/static/country_ids.json'>Region Codes</a>."},"app_ids":{"type":"array","items":{"type":"string"},"minItems":1,"description":"Array of app IDs to filter by. Can include iOS numeric IDs or Android bundle IDs."},"unified_app_ids":{"type":"array","items":{"type":"string"},"minItems":1,"description":"Array of unified app IDs to filter by (comma-separated). These are cross-platform identifiers."}},"required":["bundle","breakdown","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"regions","in":"query"},{"name":"app_ids","in":"query"},{"name":"unified_app_ids","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
