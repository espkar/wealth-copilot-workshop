# Build the Wealth Copilot

Workshop starter kit for designing and prototyping a modern data and AI platform for Asset & Wealth Management.

This repository contains a fictional banking environment with:

- 500 synthetic customers
- accounts, transactions, investments and historical market data
- a TypeScript/Express REST API with derived portfolio, risk and insight calculations
- a React/Vite frontend with Dashboard, Portfolio, Insights and Wealth Copilot views
- deterministic, explainable Copilot responses with no external AI key required
- architecture, workshop and twist-card documentation
- GitHub Pages deployment for the frontend and a Render blueprint for the API

**All data is synthetic and fictional. This is an educational demo, not a banking or investment product.**

## Quick start

Requirements: Node.js 18 or newer.

```bash
npm install
npm run generate-data
npm run dev
```

The frontend runs at `http://localhost:5173` and the API at `http://localhost:3000`.

The frontend reads the API URL from `VITE_API_URL`. When it is not set, it defaults to `http://localhost:3000`.

To run the workspaces separately:

```bash
npm run dev:api
npm run dev:frontend
```

## Useful commands

```bash
npm run generate-data  # Recreate all synthetic JSON datasets using a seeded generator
npm run build          # Build API TypeScript and frontend production assets
npm test               # Run API and frontend tests
npm run lint           # Type-check both workspaces
```

## Project structure

```text
api/
  src/
    routes/             REST endpoints
    services/           portfolio, risk, insight and Copilot logic
    data.ts             JSON data loader and indexes
data/
  generate.mjs          reproducible synthetic data generator
  *.json                generated workshop datasets
frontend/
  src/
    api/                typed API client and contracts
    components/         layout, charts and reusable cards
    pages/              dashboard, portfolio, insights and Copilot
docs/
  architecture.md      future production data and AI architecture
  workshop.md           participant challenge and deliverables
  twist-cards.md        four workshop scenario changes
prompts/
  *.md                  example GitHub Copilot CLI prompts
.github/workflows/
  deploy-frontend.yml   GitHub Pages deployment
render.yaml             optional API deployment blueprint
```

## API endpoints

The API exposes:

```text
GET  /health
GET  /customers
GET  /customers/:customerId
GET  /customers/:customerId/accounts
GET  /customers/:customerId/transactions
GET  /customers/:customerId/investments
GET  /customers/:customerId/portfolio
GET  /customers/:customerId/performance
GET  /customers/:customerId/risk
GET  /customers/:customerId/insights
POST /customers/:customerId/copilot
```

The Copilot endpoint accepts `{ "message": "How has my portfolio performed?" }`. It uses deterministic intent matching and calculations today. The service interface is deliberately isolated so a future workshop exercise can add an LLM or retrieval layer without changing the frontend contract.

## Deploying the frontend

The workflow in `.github/workflows/deploy-frontend.yml` builds and publishes `frontend/dist` to GitHub Pages. Configure the repository Pages source as **GitHub Actions**.

Set `VITE_API_URL` as a repository variable or edit the workflow environment to point at the deployed API. Do not put secrets in the frontend build.

## Deploying the API

The API is not deployable to GitHub Pages because GitHub Pages only serves static files. `render.yaml` provides a simple Render web-service blueprint:

```bash
npm install
npm run generate-data
npm run build
node api/dist/index.js
```

After deploying the API, set the frontend's `VITE_API_URL` to its public HTTPS URL and redeploy the frontend.

## Intentional workshop simplifications

- JSON files are loaded into memory instead of using a database.
- The risk score is illustrative and not a suitability assessment.
- Historical performance assumes today's quantities existed throughout the available period.
- Copilot answers are deterministic and do not call an external model.
- Authentication, authorization, consent management and production-grade observability are documented design topics, not implemented here.

See `docs/architecture.md` and `docs/workshop.md` for the recommended next steps.
