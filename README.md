# Sensor Tower MCP Server

An MCP server that exposes the Sensor Tower App Analysis API as AI-consumable tools. 60+ endpoints across 14 categories — app downloads, revenue, demographics, advertising, SDK insights, and more.

## Prerequisites

- A **Sensor Tower API key** ([generate one here](https://app.sensortower.com/users/edit/api-settings))

## Setup

Add the server to your MCP client config. For Cursor, edit `.cursor/mcp.json`. For Claude Desktop, edit `claude_desktop_config.json`.

### Local (stdio)

Build the project first (`npm install && npm run build`), then point your client at the built server:

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
docker run -p 3000:3000 ghcr.io/elad-bar/sensor-tower-mcp:latest
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

| Category | Description |
|---|---|
| App Overview | App metadata, search, and lookup |
| Downloads & Revenue | Download and revenue estimates |
| Active Users | Daily and monthly active users |
| Category Rankings | App Store and Google Play rankings |
| Advertising | Ad intelligence and creatives |
| Acquisition & Churn | User acquisition and churn metrics |
| Demographics | User demographic breakdowns |
| Session Metrics | Session count and duration |
| Engagement | User engagement and retention |
| Geographic Usage | Usage data by country, state, and metro |
| Install Metrics | Install base and penetration |
| App Updates | App update timeline and history |
| Cross-App Usage | App overlap and cross-app analysis |
| SDK Insights | SDK adoption and analysis |

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

### Project Structure

```
sensor-tower-mcp/
├── package.json
├── tsconfig.json
├── .env.example
├── Dockerfile
├── docker-compose.yml
└── src/
    ├── index.ts              # Server entry point, transport setup, API execution
    ├── types.ts              # Shared TypeScript types
    └── tools/
        ├── index.ts          # Barrel file combining all tool categories
        ├── app-overview.ts
        ├── downloads-revenue.ts
        ├── active-users.ts
        ├── category-rankings.ts
        ├── advertising.ts
        ├── acquisition-churn.ts
        ├── demographics.ts
        ├── session-metrics.ts
        ├── engagement.ts
        ├── geographic-usage.ts
        ├── install-metrics.ts
        ├── app-updates.ts
        ├── cross-app-usage.ts
        └── sdk-insights.ts
```
