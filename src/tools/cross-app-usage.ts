import type { McpToolDefinition } from '../types.js';

export const crossAppUsageTools: [string, McpToolDefinition][] = [
  ["app_overlap", {
    name: "app_overlap",
    description: `Retrieve apps which users of this app are more likely to use. <br><br> Description of Results <br> <table>
  <tr>
    <td>app_id</td>
    <td>App being compared (result app)</td>
  </tr>
  <tr>
    <td>app_a_users_likelihood_multiplier</td>
    <td>
      Requested app's users increased chance of use of result app.
    </td>
  </tr>
  <tr>
    <td>app_a_users_using_app_b_share</td>
    <td>Percentage of requested app users which also use result app</td>
  </tr>
  <tr>
    <td>app_a_users_using_app_b_share_previous_period</td>
    <td>Percentage of requested app users which also use result app in the previous period</td>
  </tr>
  <tr>
    <td>app_a_users_using_app_b_share_previous_period_diff</td>
    <td>Percentage of requested app users which also use result app – difference between the current period and the previous</td>
  </tr>
  <tr>
    <td>app_b_users_likelihood_multiplier</td>
    <td>
      Result app's users increased chance of use of requested app.
      <br>This field is only present if the \`include_inverse_multiplier\` parameter is set to \`true\`.
    </td>
  </tr>
</table>`,
    inputSchema: {"type":"object","properties":{"app_id":{"type":"string","description":"The ID of the reference Unified App. If it belongs to an app that does not meet <a target='_blank' href='https://help.sensortower.com/hc/en-us/articles/6985667275675-What-is-a-Disabled-Small-App-in-Usage-Intelligence-'> minimum requirements for usage estimates</a>, an error will be returned."},"countries":{"type":"array","items":{"default":"","type":"string"},"description":"Country to return results for. The allowed countries are the following: US, AU, CA, FR, DE, GB, IT, JP, KR, BR, IN,  ID, MY, SG, ES, TH, VN, CN, TW, HK, RU, TR, MX, PL, NL, PH, SA, EG, AE. <br> Only single countries are supported at this time. Passing multiple countries in one request will cause an error.\n"},"start_date":{"type":"string","format":"date","description":"Start of the date range to query, `YYYY-MM-DD` Format. Must be the first day of the month."},"end_date":{"type":"string","format":"date","description":"End of the date range to query, `YYYY-MM-DD` Format. Must be the last day of the month."},"category":{"type":"string","description":"Unified Category ID for the result apps.\n<b>Omit this parameter to select all categories.</b>"},"include_inverse_multiplier":{"type":"boolean","description":"Whether to include the inverse likelihood multiplier metric (result app's users increased chance of use of the requested app).\nThe metric is returned in the `app_a_users_likelihood_multiplier` field.\nIf this parameter is omitted, the field is not included in the response."}},"required":["app_id","countries","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/unified/app_overlap",
    executionParameters: [{"name":"app_id","in":"query"},{"name":"countries","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"category","in":"query"},{"name":"include_inverse_multiplier","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["cohort_engagement_cohort_session_metrics", {
    name: "cohort_engagement_cohort_session_metrics",
    description: `Fetches the app engagement trends from a specific subset of panel users.`,
    inputSchema: {"type":"object","properties":{"os":{"default":"android","enum":["android"],"type":"string","description":"Operating System"},"filter_cohort_id":{"default":"cohort_c5f1f0d92e36ce234f283c02","type":"string","description":"ID of the filter cohort. <br> Can be queried with <a href=\"/api/docs/app_analysis#/CROSS%20APP%20USAGE%3A%20Cross%20App%20Usage/cohort_engagement_cohorts\" target=\"_blank\"> Cohort Engagement Cohorts </a>"},"selection_cohort_ids":{"type":"array","items":{"default":"","type":"string"},"description":"IDs of selection cohorts, separated by commas. (Max: 5) <br> Can be queried with <a href=\"/api/docs/app_analysis#/CROSS%20APP%20USAGE%3A%20Cross%20App%20Usage/cohort_engagement_cohorts\" target=\"_blank\">\n  Cohort Engagement Cohorts\n</a>\n"},"country":{"type":"string","enum":["LATIN_AM","SE_ASIA","TIER_1","US","JP","IN"],"description":"Region to return results for (leave blank for Worldwide)"},"granularity":{"default":"weekly","enum":["weekly"],"type":"string","description":"Aggregate metrics by granularity"},"start_date":{"default":"2020-03-30","format":"date","type":"string","description":"Start Date, `YYYY-MM-DD` Format (minimum date: 2020-03-30)"},"end_date":{"default":"2020-04-27","format":"date","type":"string","description":"End Date, `YYYY-MM-DD` Format"}},"required":["os","filter_cohort_id","selection_cohort_ids","granularity","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/consumer_intel/cohort_engagement",
    executionParameters: [{"name":"os","in":"path"},{"name":"filter_cohort_id","in":"query"},{"name":"selection_cohort_ids","in":"query"},{"name":"country","in":"query"},{"name":"granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["cohort_engagement_cohorts", {
    name: "cohort_engagement_cohorts",
    description: `Fetches the available cohorts.`,
    inputSchema: {"type":"object","properties":{"os":{"default":"android","enum":["android"],"type":"string","description":"Operating System"}},"required":["os"]},
    method: "get",
    pathTemplate: "/v1/{os}/consumer_intel/cohort_engagement/cohorts",
    executionParameters: [{"name":"os","in":"path"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
