import type { McpToolDefinition } from '../types.js';

export const marketAnalysisTools: [string, McpToolDefinition][] = [
  ["ranking", {
    name: "ranking",
    description: `Retrieve top ranking apps for a particular category, chart type, and country.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android"],"type":"string","description":"Operating System"},"category":{"type":"string","description":"Category identifier"},"chart_type":{"type":"string","description":"Chart type"},"country":{"type":"string","description":"Country code"},"date":{"type":"string","format":"date","description":"Date (YYYY-MM-DD)"}},"required":["os","category","chart_type","country"]},
    method: "get",
    pathTemplate: "/v1/{os}/ranking",
    executionParameters: [{"name":"os","in":"path"},{"name":"category","in":"query"},{"name":"chart_type","in":"query"},{"name":"country","in":"query"},{"name":"date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["top_apps", {
    name: "top_apps",
    description: `Retrieve top apps by download and revenue estimates with comparison attributes.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android","unified"],"type":"string","description":"Operating System"},"comparison_attribute":{"enum":["absolute","delta","transformed_delta"],"type":"string","description":"Comparison attribute"},"time_range":{"enum":["day","week","month","quarter","year"],"type":"string","description":"Time range"},"measure":{"enum":["units","revenue"],"type":"string","description":"Measure type"},"category":{"type":"string","description":"Category identifier"},"date":{"type":"string","format":"date","description":"Date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"},"regions":{"type":"array","items":{"type":"string"},"description":"List of region codes"},"device":{"enum":["iphone","ipad","total"],"type":"string","description":"Device type"},"limit":{"default":25,"type":"number","description":"Number of results to return (default 25)"},"offset":{"type":"number","description":"Offset for pagination"},"custom_fields_filter_id":{"type":"number","description":"Custom fields filter ID"},"custom_tags_mode":{"enum":["include_unified_apps","exclude_unified_apps"],"type":"string","description":"Custom tags mode"}},"required":["os","comparison_attribute","time_range","measure","category","date","regions"]},
    method: "get",
    pathTemplate: "/v1/{os}/sales_report_estimates_comparison_attributes",
    executionParameters: [{"name":"os","in":"path"},{"name":"comparison_attribute","in":"query"},{"name":"time_range","in":"query"},{"name":"measure","in":"query"},{"name":"category","in":"query"},{"name":"date","in":"query"},{"name":"end_date","in":"query"},{"name":"regions","in":"query"},{"name":"device","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"custom_fields_filter_id","in":"query"},{"name":"custom_tags_mode","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["top_apps_active_users", {
    name: "top_apps_active_users",
    description: `Retrieve top apps by active user estimates (DAU, WAU, MAU).`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android","unified"],"type":"string","description":"Operating System"},"comparison_attribute":{"enum":["absolute","delta","transformed_delta"],"type":"string","description":"Comparison attribute"},"time_range":{"enum":["week","month","quarter"],"type":"string","description":"Time range"},"measure":{"enum":["DAU","WAU","MAU"],"type":"string","description":"Active user measure"},"category":{"type":"string","description":"Category identifier"},"date":{"type":"string","format":"date","description":"Date (YYYY-MM-DD)"},"regions":{"type":"array","items":{"type":"string"},"description":"List of region codes"},"limit":{"default":25,"type":"number","description":"Number of results to return (default 25)"},"offset":{"type":"number","description":"Offset for pagination"},"device_type":{"type":"string","description":"Device type"},"custom_fields_filter_id":{"type":"string","description":"Custom fields filter ID"}},"required":["os","comparison_attribute","time_range","measure","date","regions"]},
    method: "get",
    pathTemplate: "/v1/{os}/top_and_trending/active_users",
    executionParameters: [{"name":"os","in":"path"},{"name":"comparison_attribute","in":"query"},{"name":"time_range","in":"query"},{"name":"measure","in":"query"},{"name":"category","in":"query"},{"name":"date","in":"query"},{"name":"regions","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"device_type","in":"query"},{"name":"custom_fields_filter_id","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["top_publishers", {
    name: "top_publishers",
    description: `Retrieve top publishers by download and revenue estimates.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android","unified"],"type":"string","description":"Operating System"},"comparison_attribute":{"enum":["absolute","delta","transformed_delta"],"type":"string","description":"Comparison attribute"},"time_range":{"enum":["day","week","month","quarter","year"],"type":"string","description":"Time range"},"measure":{"enum":["units","revenue"],"type":"string","description":"Measure type"},"category":{"type":"string","description":"Category identifier"},"date":{"type":"string","format":"date","description":"Date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"},"country":{"type":"string","description":"Country code"},"device_type":{"type":"string","description":"Device type"},"limit":{"type":"number","description":"Number of results to return"},"offset":{"type":"number","description":"Offset for pagination"}},"required":["os","comparison_attribute","time_range","measure","date"]},
    method: "get",
    pathTemplate: "/v1/{os}/top_and_trending/publishers",
    executionParameters: [{"name":"os","in":"path"},{"name":"comparison_attribute","in":"query"},{"name":"time_range","in":"query"},{"name":"measure","in":"query"},{"name":"category","in":"query"},{"name":"date","in":"query"},{"name":"end_date","in":"query"},{"name":"country","in":"query"},{"name":"device_type","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["store_summary", {
    name: "store_summary",
    description: `Retrieve aggregated download and revenue estimates for store categories. All revenues returned in cents.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android","unified"],"type":"string","description":"Operating System"},"categories":{"type":"array","items":{"type":"string"},"description":"List of category identifiers"},"countries":{"type":"array","items":{"type":"string"},"description":"List of country codes"},"date_granularity":{"default":"daily","enum":["daily","weekly","monthly","quarterly"],"type":"string","description":"Date granularity (default daily)"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"}},"required":["os","categories","countries","date_granularity","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/store_summary",
    executionParameters: [{"name":"os","in":"path"},{"name":"categories","in":"query"},{"name":"countries","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["top_advertisers", {
    name: "top_advertisers",
    description: `Retrieve top advertisers or publishers by Share of Voice over a given time period.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android","unified"],"type":"string","description":"Operating System"},"role":{"enum":["advertisers","publishers"],"type":"string","description":"Role type"},"date":{"type":"string","format":"date","description":"Date (YYYY-MM-DD)"},"period":{"enum":["week","month","quarter"],"type":"string","description":"Time period"},"category":{"type":"string","description":"Category identifier"},"country":{"type":"string","description":"Country code"},"countries":{"type":"array","items":{"type":"string"},"description":"List of country codes"},"network":{"type":"string","description":"Ad network"},"custom_fields_filter_id":{"type":"string","description":"Custom fields filter ID"},"limit":{"enum":[25,100,250],"type":"number","description":"Number of results to return (25, 100, or 250)"},"page":{"type":"number","description":"Page number for pagination"}},"required":["os","role","date","period","category","country","network"]},
    method: "get",
    pathTemplate: "/v1/{os}/ad_intel/top_apps",
    executionParameters: [{"name":"os","in":"path"},{"name":"role","in":"query"},{"name":"date","in":"query"},{"name":"period","in":"query"},{"name":"category","in":"query"},{"name":"country","in":"query"},{"name":"countries","in":"query"},{"name":"network","in":"query"},{"name":"custom_fields_filter_id","in":"query"},{"name":"limit","in":"query"},{"name":"page","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["top_advertisers_search", {
    name: "top_advertisers_search",
    description: `Search for the rank of an advertiser or publisher app.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android","unified"],"type":"string","description":"Operating System"},"app_id":{"type":"string","description":"App ID to search for"},"role":{"enum":["advertisers","publishers"],"type":"string","description":"Role type"},"date":{"type":"string","format":"date","description":"Date (YYYY-MM-DD)"},"period":{"enum":["week","month","quarter"],"type":"string","description":"Time period"},"category":{"type":"string","description":"Category identifier"},"country":{"type":"string","description":"Country code"},"network":{"type":"string","description":"Ad network"}},"required":["os","app_id","role","date","period","category","country","network"]},
    method: "get",
    pathTemplate: "/v1/{os}/ad_intel/top_apps/search",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_id","in":"query"},{"name":"role","in":"query"},{"name":"date","in":"query"},{"name":"period","in":"query"},{"name":"category","in":"query"},{"name":"country","in":"query"},{"name":"network","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["top_creatives", {
    name: "top_creatives",
    description: `Retrieve top creatives by Share of Voice over a given time period.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android","unified"],"type":"string","description":"Operating System"},"date":{"type":"string","format":"date","description":"Date (YYYY-MM-DD)"},"period":{"enum":["week","month","quarter"],"type":"string","description":"Time period"},"category":{"type":"string","description":"Category identifier"},"country":{"type":"string","description":"Country code"},"network":{"type":"string","description":"Ad network"},"ad_types":{"type":"array","items":{"enum":["image","image-banner","image-interstitial","image-other","banner","full_screen","video","video-rewarded","video-interstitial","video-other","playable","interactive-playable","interactive-playable-rewarded","interactive-playable-other"],"type":"string"},"description":"Ad types filter"},"limit":{"enum":[25,100,250],"type":"number","description":"Number of results to return (25, 100, or 250)"},"page":{"type":"number","description":"Page number for pagination"},"placements":{"type":"array","items":{"enum":["ad_on_reel","feed","marketplace","player","reel","search","story","other"],"type":"string"},"description":"Placement types filter"},"video_durations":{"type":"array","items":{"type":"string"},"description":"Video duration filter"},"aspect_ratios":{"type":"array","items":{"enum":["9:16","4:5","1:1","1.91:1","16:9","2:3","other"],"type":"string"},"description":"Aspect ratio filter"},"banner_dimensions":{"type":"array","items":{"enum":["970x250","728x90","350x110","320x50","other"],"type":"string"},"description":"Banner dimension filter"},"new_creative":{"type":"boolean","description":"Filter for new creatives only"}},"required":["os","date","period","category","country","network"]},
    method: "get",
    pathTemplate: "/v1/{os}/ad_intel/creatives/top",
    executionParameters: [{"name":"os","in":"path"},{"name":"date","in":"query"},{"name":"period","in":"query"},{"name":"category","in":"query"},{"name":"country","in":"query"},{"name":"network","in":"query"},{"name":"ad_types","in":"query"},{"name":"limit","in":"query"},{"name":"page","in":"query"},{"name":"placements","in":"query"},{"name":"video_durations","in":"query"},{"name":"aspect_ratios","in":"query"},{"name":"banner_dimensions","in":"query"},{"name":"new_creative","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["games_breakdown", {
    name: "games_breakdown",
    description: `Retrieve aggregated download and revenue estimates for game categories. All revenues returned in cents.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android"],"type":"string","description":"Operating System"},"categories":{"type":"array","items":{"type":"string"},"description":"List of game category identifiers"},"countries":{"default":["WW"],"type":"array","items":{"type":"string"},"description":"List of country codes (default WW)"},"date_granularity":{"default":"daily","enum":["daily","weekly","monthly","quarterly"],"type":"string","description":"Date granularity (default daily)"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"}},"required":["os","categories","date_granularity","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/{os}/games_breakdown",
    executionParameters: [{"name":"os","in":"path"},{"name":"categories","in":"query"},{"name":"countries","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
