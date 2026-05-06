import type { McpToolDefinition } from '../types.js';

export const storeMarketingTools: [string, McpToolDefinition][] = [
  ["aso_keyword_research", {
    name: "aso_keyword_research",
    description: `Fetch detailed summary of a particular keyword including traffic, difficulty score, and ranking apps.`,
    inputSchema: {"type":"object","properties":{"bundle":{"enum":["aso_keyword_research"],"type":"string","description":"Bundle identifier"},"os":{"enum":["ios","android"],"type":"string","description":"Operating System"},"keywords":{"type":"string","description":"Single keyword to research"},"regions":{"type":"string","description":"Single region code"},"devices":{"default":"iphone","enum":["iphone","ipad"],"type":"string","description":"Device type (iOS only)"}},"required":["bundle","os","keywords","regions"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"os","in":"query"},{"name":"keywords","in":"query"},{"name":"regions","in":"query"},{"name":"devices","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["aso_timeseries", {
    name: "aso_timeseries",
    description: `Fetch ASO keyword timeseries metrics for apps.`,
    inputSchema: {"type":"object","properties":{"metric":{"enum":["keyword_rank","keyword_traffic","est_keyword_downloads","keyword_opportunity_score","keyword_app_count"],"type":"string","description":"Metric to retrieve"},"breakdown":{"enum":["date","keyword"],"type":"string","description":"Breakdown dimension"},"date_granularity":{"enum":["day","week","month","quarter"],"type":"string","description":"Date granularity"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"},"regions":{"type":"string","description":"Region code"},"keywords":{"type":"array","items":{"type":"string"},"maxItems":100,"description":"Keywords to analyze (max 100)"},"app_ids":{"type":"string","description":"Single app ID"},"os":{"enum":["ios","android"],"type":"string","description":"Operating System"},"devices":{"type":"string","description":"Device type"},"paid_search_state":{"type":"array","items":{"enum":["safe","exposed","threatened","critical"],"type":"string"},"description":"Paid search state filter"},"keyword_types":{"type":"array","items":{"enum":["branded","competitor","generic"],"type":"string"},"description":"Keyword type filter"}},"required":["metric","breakdown","date_granularity","start_date","end_date","regions","keywords","app_ids","os"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"metric","in":"query"},{"name":"breakdown","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"regions","in":"query"},{"name":"keywords","in":"query"},{"name":"app_ids","in":"query"},{"name":"os","in":"query"},{"name":"devices","in":"query"},{"name":"paid_search_state","in":"query"},{"name":"keyword_types","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["aso_rank_overview", {
    name: "aso_rank_overview",
    description: `Fetch ASO rank overview showing keyword rank distribution over time.`,
    inputSchema: {"type":"object","properties":{"bundle":{"enum":["aso_rank_overview"],"type":"string","description":"Bundle identifier"},"breakdown":{"enum":["date","keyword_rank_overview_bin"],"type":"string","description":"Breakdown dimension"},"date_granularity":{"enum":["day","week","month","quarter"],"type":"string","description":"Date granularity"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"},"regions":{"type":"string","description":"Region code"},"keywords":{"type":"array","items":{"type":"string"},"maxItems":100,"description":"Keywords to analyze (max 100)"},"app_ids":{"type":"string","description":"Single app ID"},"os":{"enum":["ios","android"],"type":"string","description":"Operating System"},"devices":{"type":"string","description":"Device type"},"paid_search_state":{"type":"array","items":{"enum":["safe","exposed","threatened","critical"],"type":"string"},"description":"Paid search state filter"},"keyword_types":{"type":"array","items":{"enum":["branded","competitor","generic"],"type":"string"},"description":"Keyword type filter"}},"required":["bundle","breakdown","date_granularity","start_date","end_date","regions","keywords","app_ids","os"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"date_granularity","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"regions","in":"query"},{"name":"keywords","in":"query"},{"name":"app_ids","in":"query"},{"name":"os","in":"query"},{"name":"devices","in":"query"},{"name":"paid_search_state","in":"query"},{"name":"keyword_types","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["aso_top_keywords", {
    name: "aso_top_keywords",
    description: `Fetch top keywords metrics for an app.`,
    inputSchema: {"type":"object","properties":{"bundle":{"enum":["aso_top_keywords"],"type":"string","description":"Bundle identifier"},"breakdown":{"enum":["keyword"],"type":"string","description":"Breakdown dimension"},"regions":{"type":"string","description":"Region code"},"app_ids":{"type":"string","description":"Single app ID"},"os":{"enum":["ios","android"],"type":"string","description":"Operating System"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"},"user_tracked":{"default":false,"type":"boolean","description":"Filter to user-tracked keywords only"},"devices":{"enum":["iphone","ipad"],"type":"string","description":"Device type (iOS only)"},"keyword_types":{"type":"array","items":{"enum":["branded","competitor","generic"],"type":"string"},"description":"Keyword type filter"},"limit":{"default":25,"type":"number","maximum":200,"description":"Maximum number of results (max 200, default 25)"},"offset":{"type":"number","description":"Offset for pagination"},"order_by":{"type":"array","items":{"type":"string"},"description":"Order by fields"}},"required":["bundle","breakdown","regions","app_ids","os"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"regions","in":"query"},{"name":"app_ids","in":"query"},{"name":"os","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"user_tracked","in":"query"},{"name":"devices","in":"query"},{"name":"keyword_types","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"order_by","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["featured_apps", {
    name: "featured_apps",
    description: `Retrieve featured apps and games in the App Store.`,
    inputSchema: {"type":"object","properties":{"category":{"type":"string","description":"App Store category"},"country":{"type":"string","description":"Country code"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"}},"required":["category","country"]},
    method: "get",
    pathTemplate: "/v1/ios/featured/apps",
    executionParameters: [{"name":"category","in":"query"},{"name":"country","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["featured_creatives", {
    name: "featured_creatives",
    description: `Retrieve featured creatives details for a particular app.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android"],"type":"string","description":"Operating System"},"app_id":{"type":"string","description":"Application ID"},"countries":{"type":"array","items":{"type":"string"},"description":"Country codes to filter by"},"types":{"type":"array","items":{"type":"string"},"description":"Creative types to filter by"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"}},"required":["os","app_id"]},
    method: "get",
    pathTemplate: "/v1/{os}/featured/creatives",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_id","in":"query"},{"name":"countries","in":"query"},{"name":"types","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["featured_impacts", {
    name: "featured_impacts",
    description: `Retrieve occurrence and download impact data for a featured app.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android"],"type":"string","description":"Operating System"},"app_id":{"type":"string","description":"Application ID"},"countries":{"type":"array","items":{"type":"string"},"description":"Country codes to filter by"},"types":{"type":"array","items":{"type":"string"},"description":"Feature types to filter by"},"breakdown":{"enum":["country","type"],"type":"string","description":"Breakdown dimension"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"}},"required":["os","app_id"]},
    method: "get",
    pathTemplate: "/v1/{os}/featured/impacts",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_id","in":"query"},{"name":"countries","in":"query"},{"name":"types","in":"query"},{"name":"breakdown","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["featured_today_stories", {
    name: "featured_today_stories",
    description: `Retrieve featured Today stories from the App Store.`,
    inputSchema: {"type":"object","properties":{"country":{"type":"string","description":"Country code"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"}}},
    method: "get",
    pathTemplate: "/v1/ios/featured/today/stories",
    executionParameters: [{"name":"country","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["getRatingsMetrics", {
    name: "getRatingsMetrics",
    description: `Fetch rating metrics for mobile apps (incremental or cumulative).`,
    inputSchema: {"type":"object","properties":{"bundle":{"enum":["ratings_incremental","ratings_cumulative"],"type":"string","description":"Rating metric type"},"breakdown":{"type":"string","description":"Breakdown dimension (e.g. app_id, app_id,date, region, region,date, app_version)"},"date_granularity":{"enum":["day","week","month"],"type":"string","description":"Date granularity"},"app_ids":{"type":"array","items":{"type":"string"},"description":"App IDs to retrieve metrics for"},"regions":{"type":"array","items":{"type":"string"},"description":"Region codes to filter by"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"},"android_localized_estimates":{"type":"boolean","description":"Use localized estimates for Android"}},"required":["bundle","breakdown","app_ids","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"date_granularity","in":"query"},{"name":"app_ids","in":"query"},{"name":"regions","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"android_localized_estimates","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["get_reviews", {
    name: "get_reviews",
    description: `Retrieve detailed reviews for a particular app with filtering and pagination.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android"],"type":"string","description":"Operating System"},"app_id":{"type":"string","description":"Application ID"},"country":{"type":"string","description":"Country code"},"rating":{"type":"number","description":"Filter by star rating"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"},"limit":{"default":50,"type":"number","description":"Number of results per page (default 50)"},"page":{"type":"number","description":"Page number for pagination"},"sort":{"enum":["date","rating"],"type":"string","description":"Sort field"},"direction":{"enum":["asc","desc"],"type":"string","description":"Sort direction"},"tags":{"type":"array","items":{"type":"string"},"description":"Filter by tags"},"sentiment":{"enum":["happy","neutral","unhappy"],"type":"string","description":"Filter by sentiment"},"version":{"type":"string","description":"Filter by app version"},"search_term":{"type":"string","description":"Search term to filter reviews"}},"required":["os","app_id"]},
    method: "get",
    pathTemplate: "/v1/{os}/review/get_reviews",
    executionParameters: [{"name":"os","in":"path"},{"name":"app_id","in":"query"},{"name":"country","in":"query"},{"name":"rating","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"limit","in":"query"},{"name":"page","in":"query"},{"name":"sort","in":"query"},{"name":"direction","in":"query"},{"name":"tags","in":"query"},{"name":"sentiment","in":"query"},{"name":"version","in":"query"},{"name":"search_term","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["getReviewsByRating", {
    name: "getReviewsByRating",
    description: `Fetch review metrics broken down by rating for mobile apps.`,
    inputSchema: {"type":"object","properties":{"bundle":{"enum":["reviews_by_rating"],"type":"string","description":"Bundle identifier"},"breakdown":{"type":"string","description":"Breakdown dimension"},"date_granularity":{"enum":["day","week","month"],"type":"string","description":"Date granularity"},"app_ids":{"type":"array","items":{"type":"string"},"description":"App IDs to retrieve metrics for"},"regions":{"type":"array","items":{"type":"string"},"description":"Region codes to filter by"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"}},"required":["bundle","breakdown","app_ids","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"date_granularity","in":"query"},{"name":"app_ids","in":"query"},{"name":"regions","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["getReviewsBySentiment", {
    name: "getReviewsBySentiment",
    description: `Fetch review metrics broken down by sentiment for mobile apps.`,
    inputSchema: {"type":"object","properties":{"bundle":{"enum":["reviews_by_sentiment"],"type":"string","description":"Bundle identifier"},"breakdown":{"type":"string","description":"Breakdown dimension"},"date_granularity":{"enum":["day","week","month"],"type":"string","description":"Date granularity"},"app_ids":{"type":"array","items":{"type":"string"},"description":"App IDs to retrieve metrics for"},"regions":{"type":"array","items":{"type":"string"},"description":"Region codes to filter by"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"}},"required":["bundle","breakdown","app_ids","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"date_granularity","in":"query"},{"name":"app_ids","in":"query"},{"name":"regions","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["getReviewsByTag", {
    name: "getReviewsByTag",
    description: `Fetch review metrics broken down by tag for mobile apps.`,
    inputSchema: {"type":"object","properties":{"bundle":{"enum":["reviews_by_tag"],"type":"string","description":"Bundle identifier"},"breakdown":{"type":"string","description":"Breakdown dimension"},"date_granularity":{"enum":["day","week","month"],"type":"string","description":"Date granularity"},"app_ids":{"type":"array","items":{"type":"string"},"description":"App IDs to retrieve metrics for"},"regions":{"type":"array","items":{"type":"string"},"description":"Region codes to filter by"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"}},"required":["bundle","breakdown","app_ids","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/facets/metrics",
    executionParameters: [{"name":"bundle","in":"query"},{"name":"breakdown","in":"query"},{"name":"date_granularity","in":"query"},{"name":"app_ids","in":"query"},{"name":"regions","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["search_ads_apps", {
    name: "search_ads_apps",
    description: `Retrieve Apple Search Ads analytics report for your apps.`,
    inputSchema: {"type":"object","properties":{"app_id":{"type":"string","description":"Application ID"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"},"date_granularity":{"enum":["daily","weekly","monthly"],"type":"string","description":"Date granularity"},"measures":{"type":"array","items":{"type":"string"},"description":"Measures to include in the report"}},"required":["app_id","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/ios/search_ads/apps",
    executionParameters: [{"name":"app_id","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"date_granularity","in":"query"},{"name":"measures","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["search_ads_terms", {
    name: "search_ads_terms",
    description: `Retrieve Apple Search Ads metrics by source type for your apps.`,
    inputSchema: {"type":"object","properties":{"app_id":{"type":"string","description":"Application ID"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"},"date_granularity":{"enum":["daily","weekly","monthly"],"type":"string","description":"Date granularity"},"source_type":{"type":"string","description":"Source type filter"}},"required":["app_id","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/ios/search_ads/terms",
    executionParameters: [{"name":"app_id","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"},{"name":"date_granularity","in":"query"},{"name":"source_type","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["search_ads_history", {
    name: "search_ads_history",
    description: `Retrieve Apple Search Ads historical occurrence and download impact data.`,
    inputSchema: {"type":"object","properties":{"app_id":{"type":"string","description":"Application ID"},"start_date":{"type":"string","format":"date","description":"Start date (YYYY-MM-DD)"},"end_date":{"type":"string","format":"date","description":"End date (YYYY-MM-DD)"}},"required":["app_id","start_date","end_date"]},
    method: "get",
    pathTemplate: "/v1/ios/search_ads/history",
    executionParameters: [{"name":"app_id","in":"query"},{"name":"start_date","in":"query"},{"name":"end_date","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
