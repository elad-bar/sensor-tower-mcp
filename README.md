# Sensor Tower MCP Server

An MCP server that exposes the Sensor Tower API as AI-consumable tools. 90+ endpoints across 19 categories — app downloads, revenue, demographics, advertising, SDK insights, ASO, web analytics, and more.

## Prerequisites

- A **Sensor Tower API key** ([generate one here](https://app.sensortower.com/users/edit/api-settings))

## Setup

Add the server to your MCP client config. For Cursor, edit `.cursor/mcp.json`. For Claude Desktop, edit `claude_desktop_config.json`.

### Local (stdio)

No build or clone needed — run directly via npx:

```json
{
  "mcpServers": {
    "sensor-tower": {
      "command": "npx",
      "args": ["-y", "@barush/sensor-tower-mcp"],
      "env": {
        "SENSOR_TOWER_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

Alternatively, if you have the repo cloned locally:

```json
{
  "mcpServers": {
    "sensor-tower": {
      "command": "node",
      "args": ["<path-to-repo>/build/index.js"],
      "env": {
        "SENSOR_TOWER_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Remote (HTTP)

Connect to a running instance. No local build needed — just provide the server URL and your API key:

```json
{
  "mcpServers": {
    "sensor-tower": {
      "url": "http://your-server:3000/mcp",
      "headers": {
        "Authorization": "Bearer your_api_key_here"
      }
    }
  }
}
```

## Deploying the Remote Server

For shared or hosted deployments, run the server in HTTP mode. Each client sends their own Sensor Tower API key via the `Authorization` header, enabling multi-user access.

### With Docker (recommended)

```bash
docker run -p 3000:3000 ghcr.io/elad-bar/sensor-tower-mcp:main
```

Or using Docker Compose:

```bash
docker compose up
```

To use a different port:

```bash
PORT=8080 docker compose up
```

### Without Docker

```bash
npm install && npm run build
node build/index.js --transport http
```

The server listens on `POST /mcp` (port 3000 by default). `GET /mcp` and `DELETE /mcp` return 405 (stateless mode — no server-side sessions).

## Available Tools

### App Overview

| Tool | Description |
|------|-------------|
| `search_entities` | Search for apps and publishers by name, description, app ID, or Unified ID |
| `apps` | Retrieve app metadata (name, publisher, categories, icon, etc.) |
| `top_in_app_purchases` | Retrieve top in-app purchases for requested apps |

### Downloads & Revenue

| Tool | Description |
|------|-------------|
| `sales_report_estimates` | Download and revenue estimates by country and date |

### Active Users

| Tool | Description |
|------|-------------|
| `usage_active_users` | Active user estimates (DAU/WAU/MAU) per country and date |

### Category Rankings

| Tool | Description |
|------|-------------|
| `category_history` | Historical ranking for an app by category and chart type |
| `category_ranking_summary` | Today's category ranking summary for an app |

### Advertising

| Tool | Description |
|------|-------------|
| `creatives` | Creatives for an advertising app with SOV and top publishers |
| `impressions` | SOV time series for requested apps |
| `impressions_rank` | Ranks by country, network, and date for requested apps |

### Acquisition & Churn

| Tool | Description |
|------|-------------|
| `app_analysis_retention` | Retention from day 1 to day 90 with baseline |
| `download_channels` | Download source breakdown (organic, paid, search, browser) |
| `churn_analysis` | Churn rate and active user breakdown metrics |
| `churn_analysis_cohorts` | Available churn analysis cohorts |
| `cohort_retention` | Cohort retention from panel users |
| `cohort_retention_cohorts` | Available cohort retention cohorts |
| `getRetentionMetrics` | Retention metrics (daily/weekly/monthly periods) |

### Demographics

| Tool | Description |
|------|-------------|
| `app_analysis_demographics` | Demographic breakdown by gender and age range |

### Session Metrics

| Tool | Description |
|------|-------------|
| `session_metrics_timeseries` | Session metrics time series for iOS/Android apps |
| `unified_session_metrics_timeseries` | Session metrics time series for unified apps |

### Engagement

| Tool | Description |
|------|-------------|
| `engagement_insights_cohort_session_metrics` | App engagement trends from panel users |
| `engagement_insights_cohorts` | Available engagement insights cohorts |
| `time_of_day` | Time of day usage data from panel users |
| `time_of_day_cohorts` | Available time of day cohorts |
| `power_user_curve` | Power user curve from panel users |
| `power_user_curve_cohorts` | Available power user curve cohorts |

### Geographic Usage

| Tool | Description |
|------|-------------|
| `metro_active_users` | Active users by metropolitan area |
| `state_active_users` | Active users by US state |

### Install Metrics

| Tool | Description |
|------|-------------|
| `getInstallMetrics` | Install base, penetration, and engagement metrics |

### App Updates

| Tool | Description |
|------|-------------|
| `app_update_timeline` | Detailed app update history (version, summary, screenshots) |
| `version_history` | Version history with release notes |

### Cross-App Usage

| Tool | Description |
|------|-------------|
| `app_overlap` | Apps that users of a given app are more likely to use |
| `cohort_engagement_cohort_session_metrics` | Cross-app engagement trends from panel users |
| `cohort_engagement_cohorts` | Available cross-app engagement cohorts |

### SDK Insights

| Tool | Description |
|------|-------------|
| `getSDKAnalysis` | Timeseries metrics for SDKs |
| `getSDKOverviewApps` | Apps with a particular SDK installed or uninstalled |
| `sdk_overview` | Metadata and performance metrics for SDKs |

### Market Analysis

| Tool | Description |
|------|-------------|
| `ranking` | Top ranking apps by category, chart type, and country |
| `top_apps` | Top apps by download and revenue estimates |
| `top_apps_active_users` | Top apps by active users (DAU/WAU/MAU) |
| `top_publishers` | Top publishers by downloads and revenue |
| `store_summary` | Aggregated download and revenue estimates for store categories |
| `top_advertisers` | Top advertisers or publishers by Share of Voice |
| `top_advertisers_search` | Search for rank of an advertiser or publisher |
| `top_creatives` | Top creatives by Share of Voice |
| `games_breakdown` | Aggregated download and revenue for game categories |

### Store Marketing

| Tool | Description |
|------|-------------|
| `aso_keyword_research` | Keyword summary with traffic, difficulty, and ranking apps |
| `aso_timeseries` | ASO keyword timeseries metrics |
| `aso_rank_overview` | Keyword rank distribution over time |
| `aso_top_keywords` | Top keywords for an app |
| `featured_apps` | Featured apps and games in the App Store |
| `featured_creatives` | Featured creatives for an app |
| `featured_impacts` | Featured occurrence and download impact |
| `featured_today_stories` | Featured Today stories from the App Store |
| `getRatingsMetrics` | Rating metrics (incremental or cumulative) |
| `get_reviews` | App reviews with filtering and pagination |
| `getReviewsByRating` | Review metrics broken down by rating |
| `getReviewsBySentiment` | Review metrics broken down by sentiment |
| `getReviewsByTag` | Review metrics broken down by tag |
| `search_ads_apps` | Apple Search Ads analytics for your apps |
| `search_ads_terms` | Apple Search Ads metrics by source type |
| `search_ads_history` | Apple Search Ads historical data |

### Custom Fields

| Tool | Description |
|------|-------------|
| `app_ids_by_category` | App IDs by release/updated date range and category |
| `publisher_apps` | Apps for a particular publisher |
| `unified_publisher_apps` | Unified publisher and all apps across platforms |
| `unified_apps` | iOS/Android app IDs for unified apps |
| `unified_publishers` | iOS/Android publisher IDs for unified publishers |
| `tags_for_apps` | Global or custom field tag values for apps |
| `apps_by_tag` | Apps with a particular tag value |
| `custom_field_list` | Custom fields and tags with app counts |
| `add_tag_for_app` | Add a tag value to a custom field for an app |
| `edit_tag` | Edit a tag value for an app |
| `remove_tag_for_app` | Remove a tag value from an app |
| `change_all_values_matching` | Bulk change tag values in a custom field |
| `remove_custom_field` | Remove a custom field entirely |
| `create_custom_fields_filter` | Create a custom fields filter |
| `get_custom_fields_filter` | Retrieve a custom fields filter by ID |
| `get_custom_fields_filter_values` | Available fields and values for filters |

### Your Metrics

| Tool | Description |
|------|-------------|
| `my_app_analytics` | App Store analytics for connected apps |
| `my_sources_metrics` | Source type metrics for connected apps |
| `my_sales_reports` | Downloads and revenue sales reports for connected apps |
| `unified_sales_reports` | Unified sales reports across platforms |
| `api_usage` | Sensor Tower API usage metrics |

### Web Insights

| Tool | Description |
|------|-------------|
| `website_device_overlap` | Visitor distribution across devices |
| `website_duration` | Visit duration metrics |
| `top_websites` | Top websites by traffic |
| `website_visits` | Visit metrics (unique visitors, page views) |
| `website_paths` | Path metrics for user journey analysis |
| `website_traffic_channels` | Traffic channel breakdown |
| `website_traffic_flow` | Traffic flow (referral and destination patterns) |
| `website_top_paths` | Top paths by traffic |
| `gen_ai_citations` | Gen AI citation metrics for websites |

## Configuration

| Variable | Required | Default | Description |
|---|---|---|---|
| `SENSOR_TOWER_API_KEY` | stdio only | — | Sensor Tower API key (in HTTP mode, clients send it via `Authorization` header) |
| `PORT` | No | `3000` | HTTP server port (only used with `--transport http`) |

---

## Development

### Building from source

Requires **Node.js >= 20**.

```bash
npm install
npm run build
```

### Scripts

```bash
npm run build       # Compile TypeScript
npm run typecheck   # Type-check without emitting
npm start           # Build and start (stdio mode)
```

### Docker build (local)

```bash
docker build -t sensor-tower-mcp .
docker run -p 3000:3000 sensor-tower-mcp
```

Pre-built images are published to `ghcr.io/elad-bar/sensor-tower-mcp` on every push to `main`.
