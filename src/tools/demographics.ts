import type { McpToolDefinition } from '../types.js';

export const demographicsTools: [string, McpToolDefinition][] = [
  ["app_analysis_demographics", {
    name: "app_analysis_demographics",
    description: `Retrieve demographic breakdown of apps (by gender and age range), along with the baseline demographic. <br><br> Mapping between confidence levels and their respective confidence color in the UI: <br> <table>
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
    inputSchema: {"type":"object","properties":{"os":{"default":"ios","enum":["ios","android"],"type":"string","description":"Operating System"},"app_ids":{"type":"array","items":{"default":"","type":"string"},"description":"IDs of apps, separated by commas. Maximum 500 app ids.<br>If apps that do not meet  <a target='_blank' href='https://help.sensortower.com/hc/en-us/articles/6985667275675-What-is-a-Disabled-Small-App-in-Usage-Intelligence-'> minimum requirements for usage estimates</a> are requested, they will not be taken into consideration; their IDs can be found in the disabled_app_ids field."},"date_granularity":{"default":"all_time","enum":["all_time","quarterly"],"type":"string","description":"Aggregate estimates by granularity (use \"all_time\", or \"quarterly\")"},"start_date":{"type":"string","format":"date","description":"Start Date, `YYYY-MM-DD` Format"},"end_date":{"type":"string","format":"date","description":"End Date, `YYYY-MM-DD` Format. If specified, all date periods between start_date and end_date are to be returned. E.g. if 'date_granularity' is set to 'quarterly', 'start_date' is '2021-01-01' and 'end_date' is '2021-08-01', response will contain data for Q1, Q2 and Q3 of 2021. If 'date_granularity' is set to 'all_time', 'end_date' parameter is ignored."},"country":{"type":"string","description":"Country (<a target='_blank' href='/api/v1/usage/demographics/countries.json'>country codes</a>) or region (<a target='_blank' href='/api/v1/usage/regions.json'>region codes</a>) to return results for. (Leave blank for Worldwide.) <br> Quarterly regional and country data begins in Q1 2021. Worldwide and All Time data goes back to Q4 2015.\n"}},"required":["os","app_ids","date_granularity","start_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/usage/demographics",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_ids","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"country","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
