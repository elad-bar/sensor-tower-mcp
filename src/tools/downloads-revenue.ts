import type { McpToolDefinition } from '../types.js';

export const downloadsRevenueTools: [string, McpToolDefinition][] = [
  ["sales_report_estimates", {
    name: "sales_report_estimates",
    description: `Retrieve download and revenue estimates of apps by country and date. <a target='blank' href='/api/docs/static/sales_report_estimates_key.json'>
  Download / Revenue Estimate Response Key
</a> <br><br> <strong>Note:</strong> The latest day's available Google Play estimates may change. More data becomes available to us a day later and we use this data to recalibrate the estimate for increased accuracy. <br><br> <b>At least one app ID, or one publisher ID is required.</b> Some Android publisher IDs contain commas. If you want to query by these publisher IDs, please use the <b>array parameter format</b> instead of the comma separated format. (I.e. <code>?publisher_ids[]=AndroidPubId1&publisher_ids[]=AndroidPubId2&publisher_ids[]=...</code>) <br><br> There are times when the API will timeout or return an <b>Internal Server Error</b> response.  When this occurs, it is recommended to segment the query by <b>start_date</b> and <b>end_date</b> depending on the <b>date_granularity</b> as follows: <br> <table>
  <tr>
    <td><b>date_granularity</b></td>
    <td><b>Recommendation</b></td>
  </tr>
  <tr>
    <td>daily</td>
    <td>limit start_date and end_date to 1 week segments</td>
  </tr>
  <tr>
    <td>weekly</td>
    <td>limit start_date and end_date to 3 month segments</td>
  </tr>
  <tr>
    <td>monthly</td>
    <td>limit start_date and end_date to 1 year segments</td>
  </tr>
  <tr>
    <td>quarterly</td>
    <td>limit start_date and end_date to 2 year segments</td>
  </tr>
</table> <br><br> <strong>Note:</strong> All revenues are returned in cents.`,
    inputSchema: {"type":"object","properties":{"os":{"default":"ios","enum":["ios","android","unified"],"type":"string","description":"Operating System"},"app_ids":{"items":{"default":"","type":"string"},"type":"array","description":"IDs of apps, separated by commas"},"publisher_ids":{"type":"array","items":{"default":"","type":"string"},"description":"Publisher IDs of apps, separated by commas <span style='color: #FF0000'>(See implementation notes for specific implementations regarding Android publisher IDs)</span>"},"countries":{"default":["WW"],"type":"array","items":{"default":"","type":"string"},"description":"Specify the countries you want download / revenue for, separated by commas: <a target='_blank' href='/api/ios/sales_report_estimates/countries'>Itunes Country Codes</a> /  <a target='_blank' href='/api/android/sales_report_estimates/countries'>Android Country Codes</a> (use \"WW\" for worldwide)."},"date_granularity":{"default":"daily","enum":["daily","weekly","monthly","quarterly"],"type":"string","description":"Aggregate estimates by granularity (use \"daily\", \"weekly\", \"monthly\", or \"quarterly\") defaults to \"daily\""},"start_date":{"type":"string","format":"date","description":"Start Date, `YYYY-MM-DD` Format"},"end_date":{"type":"string","format":"date","description":"End Date, `YYYY-MM-DD` Format"},"rollup_descendant_estimates":{"default":false,"enum":[true,false],"type":"string","description":"Use company tree hierarchy to expand unified publishers (`unified` OS only) (default: `false`)"}},"required":["os","date_granularity","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/sales_report_estimates",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_ids","in":"query"},{"name":"publisher_ids","in":"query"},{"name":"countries","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"rollup_descendant_estimates","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
