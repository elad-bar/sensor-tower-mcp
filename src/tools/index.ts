import type { McpToolDefinition } from '../types.js';

import { appOverviewTools } from './app-overview.js';
import { downloadsRevenueTools } from './downloads-revenue.js';
import { activeUsersTools } from './active-users.js';
import { categoryRankingsTools } from './category-rankings.js';
import { advertisingTools } from './advertising.js';
import { acquisitionChurnTools } from './acquisition-churn.js';
import { demographicsTools } from './demographics.js';
import { sessionMetricsTools } from './session-metrics.js';
import { engagementTools } from './engagement.js';
import { geographicUsageTools } from './geographic-usage.js';
import { installMetricsTools } from './install-metrics.js';
import { appUpdatesTools } from './app-updates.js';
import { crossAppUsageTools } from './cross-app-usage.js';
import { sdkInsightsTools } from './sdk-insights.js';
import { marketAnalysisTools } from './market-analysis.js';
import { storeMarketingTools } from './store-marketing.js';
import { customFieldsTools } from './custom-fields.js';
import { yourMetricsTools } from './your-metrics.js';
import { webInsightsTools } from './web-insights.js';

export function getAllTools(): Map<string, McpToolDefinition> {
  return new Map<string, McpToolDefinition>([
    ...appOverviewTools,
    ...downloadsRevenueTools,
    ...activeUsersTools,
    ...categoryRankingsTools,
    ...advertisingTools,
    ...acquisitionChurnTools,
    ...demographicsTools,
    ...sessionMetricsTools,
    ...engagementTools,
    ...geographicUsageTools,
    ...installMetricsTools,
    ...appUpdatesTools,
    ...crossAppUsageTools,
    ...sdkInsightsTools,
    ...marketAnalysisTools,
    ...storeMarketingTools,
    ...customFieldsTools,
    ...yourMetricsTools,
    ...webInsightsTools,
  ]);
}
