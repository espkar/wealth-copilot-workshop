# Wealth Copilot reference architecture

The workshop prototype uses static JSON files and a small REST API so participants can focus on product and platform decisions without spending the first hour configuring infrastructure. A production wealth platform would separate ingestion, governed data products, analytics and AI serving more explicitly.

## Logical flow

```text
Core banking, cards, broker, pension, open banking, market data
        ↓
Batch ingestion + streaming/event adapters
        ↓
Landing zone in a data lake / lakehouse
        ↓
Standardized transformations and domain data products
        ↓
Data quality rules, reconciliation and exception workflow
        ↓
Data governance, catalog, lineage, consent and master data
        ↓
Warehouse/lakehouse analytics, ML features and portfolio services
        ↓
AI platform: retrieval, tools, model gateway, guardrails and evaluation
        ↓
Authenticated APIs and event-driven services
        ↓
Web/mobile digital channels and advisor tooling
```

## Platform building blocks

### Data sources and ingestion

Use batch ingestion for statements, end-of-day positions and periodic reference data. Use streaming or event-driven ingestion for trades, payments, price ticks, customer preference changes and portfolio updates. Every event should have an idempotency key, event time, source system, schema version and trace identifier.

### Lakehouse and warehouse

The lakehouse is a durable, economical landing and history layer for raw and standardized data. A warehouse or semantic layer serves governed reporting and low-latency business queries. Keep raw, standardized and curated zones separate so a transformation can be replayed and audited.

### Master data, catalog and lineage

Customer, account, instrument and organization identifiers need mastered mappings across source systems. A data catalog should describe ownership, sensitivity, retention and quality expectations. Lineage should show how an AI insight or dashboard metric can be traced back to source records and transformation versions.

### Data quality

Typical checks include schema validation, required fields, uniqueness, referential integrity, reconciliation to source totals, freshness, outlier detection and duplicate-event detection. Quality failures should create observable exceptions rather than silently dropping records.

### Identity and access management

Use strong customer authentication, service identities, short-lived tokens, least privilege and purpose-bound access. Separate customer-facing APIs, advisor access and internal data-science access. Authorize every request for the customer, account and data purpose in scope.

### Security, privacy and GDPR

Encrypt data in transit and at rest. Tokenize or minimize sensitive fields in analytics and AI contexts. Implement consent and purpose tracking, data-subject access and deletion workflows, retention limits, regional processing controls and a clear explanation of automated decision-making. Do not send unnecessary personal data to a model provider.

### Audit logging and observability

Record who accessed which data, which tool or model was called, the policy decision, the data versions used and the response shown to the customer. Monitor latency, errors, freshness, quality, model drift, prompt injection signals and unusual access patterns. Logs must be tamper-resistant and protected from containing unnecessary sensitive data.

### AI platform and governance

A production Copilot should use a model gateway, approved-model registry, prompt/version management, retrieval controls, tool allowlists, content safety, financial-advice boundaries and human escalation. Responses should cite the data used, distinguish facts from explanations, expose uncertainty and avoid making regulated recommendations without the required controls.

Model evaluation should include factuality, groundedness, refusal behavior, fairness, privacy leakage, prompt injection resistance and scenario-specific financial safety. Monitor these measures continuously after release.

## Prototype-to-production mapping

| Prototype | Production direction |
| --- | --- |
| `data/*.json` | Governed lakehouse and domain data products |
| `api/src/data.ts` | Data access layer with policy enforcement |
| Portfolio service | Portfolio domain service backed by positions and prices |
| Rule-based insights | Feature store/analytics plus governed insight service |
| Deterministic Copilot | Model gateway, retrieval, tools and evaluation |
| Vite frontend | Authenticated web/mobile channel |

The key design principle is to keep deterministic calculations and policy checks outside the language model. The model may explain governed facts, but it should not become the system of record for balances, prices, permissions or suitability decisions.
