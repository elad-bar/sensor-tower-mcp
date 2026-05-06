import type { McpToolDefinition } from '../types.js';

export const engagementTools: [string, McpToolDefinition][] = [
  ["engagement_insights_cohort_session_metrics", {
    name: "engagement_insights_cohort_session_metrics",
    description: `Fetches the app engagement trends from a specific subset of panel users.`,
    inputSchema: {"type":"object","properties":{"os":{"default":"android","enum":["android"],"type":"string","description":"Operating System"},"selection_cohort_ids":{"type":"array","items":{"default":"","type":"string"},"description":"IDs of selection cohorts, separated by commas. (Max: 5) <br> Can be queried with <a href=\"/api/docs/app_analysis#/USAGE%3A%20Engagement/engagement_insights_cohorts\" target=\"_blank\">\n  Engagement Insights Cohorts\n</a>\n"},"country":{"type":"string","enum":["LATIN_AM","SE_ASIA","TIER_1","US","JP","IN"],"description":"Region to return results for (leave blank for Worldwide)"},"granularity":{"default":"weekly","enum":["daily","weekly"],"type":"string","description":"Aggregate metrics by granularity"},"start_date":{"default":"2020-03-30","format":"date","type":"string","description":"Start Date, `YYYY-MM-DD` Format (minimum date: 2020-03-30)"},"end_date":{"default":"2020-04-27","format":"date","type":"string","description":"End Date, `YYYY-MM-DD` Format"}},"required":["os","selection_cohort_ids","granularity","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/consumer_intel/engagement_insights",
    executionParameters: [{"name":"os","in":"path"},{"name":"selection_cohort_ids","in":"query"},{"name":"country","in":"query"},{"name":"granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["engagement_insights_cohorts", {
    name: "engagement_insights_cohorts",
    description: `Fetches the available cohorts.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["android"],"type":"string","description":"Operating System"}},"required":["os"]},
    method: "get",
    pathTemplate: "/v1/{os}/consumer_intel/engagement_insights/cohorts",
    executionParameters: [{"name":"os","in":"path"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["time_of_day", {
    name: "time_of_day",
    description: `Fetches the time of day data from a specific subset of panel users. <br><br> The index of each number in <code>time_spent_hourly</code> maps to the hour of the day. For example, the 0th index is midnight and the 23rd index is 11pm.
`,
    inputSchema: {"type":"object","properties":{"os":{"default":"android","enum":["android"],"type":"string","description":"Operating System"},"selection_cohort_ids":{"type":"array","items":{"default":"","type":"string"},"description":"IDs of selection cohorts, separated by commas. (Max: 5) <br> Can be queried with <a href=\"/api/docs/app_analysis#/USAGE%3A%20Engagement/time_of_day_cohorts\" target=\"_blank\">\n  Time Of Day Cohorts\n</a>\n"},"granularity":{"default":"all_time","enum":["all_time"],"type":"string","description":"Retention by granularity"}},"required":["os","selection_cohort_ids","granularity"]},
    method: "get",
    pathTemplate: "/v1/{os}/consumer_intel/time_of_day",
    executionParameters: [{"name":"os","in":"path"},{"name":"selection_cohort_ids","in":"query"},{"name":"granularity","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["time_of_day_cohorts", {
    name: "time_of_day_cohorts",
    description: `Fetches the available cohorts.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["android"],"type":"string","description":"Operating System"}},"required":["os"]},
    method: "get",
    pathTemplate: "/v1/{os}/consumer_intel/time_of_day/cohorts",
    executionParameters: [{"name":"os","in":"path"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["power_user_curve", {
    name: "power_user_curve",
    description: `Fetches the power user curve from a specific subset of panel users.`,
    inputSchema: {"type":"object","properties":{"os":{"default":"android","enum":["android"],"type":"string","description":"Operating System"},"selection_cohort_ids":{"type":"array","items":{"default":"","type":"string"},"description":"IDs of selection cohorts, separated by commas. (Max: 5) <br> Can be queried with <a href=\"/api/docs/app_analysis#/USAGE%3A%20Engagement/power_user_curve_cohorts\" target=\"_blank\">\n  Power User Curve Cohorts\n</a>\n"},"country":{"type":"string","enum":["LATIN_AM","SE_ASIA","TIER_1","US","JP","IN"],"description":"Country to return results for (leave blank for Worldwide)"},"granularity":{"default":"monthly","enum":["monthly"],"type":"string","description":"Power User Curve by granularity"},"start_date":{"default":"2020-03-30","format":"date","type":"string","description":"Start Date, `YYYY-MM-DD` Format (minimum date: 2020-03-30)"},"end_date":{"default":"2020-05-31","format":"date","type":"string","description":"End Date, `YYYY-MM-DD` Format"}},"required":["os","selection_cohort_ids","granularity","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/consumer_intel/power_user_curve",
    executionParameters: [{"name":"os","in":"path"},{"name":"selection_cohort_ids","in":"query"},{"name":"country","in":"query"},{"name":"granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["power_user_curve_cohorts", {
    name: "power_user_curve_cohorts",
    description: `Fetches the available cohorts.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["android"],"type":"string","description":"Operating System"}},"required":["os"]},
    method: "get",
    pathTemplate: "/v1/{os}/consumer_intel/power_user_curve/cohorts",
    executionParameters: [{"name":"os","in":"path"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
