# Workshop twist cards

Introduce one card at a time after teams have a first design. Ask each team to update both the architecture and the user experience.

## Twist 1: External investments

**Scenario:** The customer has investments with another financial institution. How should your platform handle this?

Discuss open-banking consent, data freshness, instrument mapping, ownership verification, aggregation boundaries, missing cost basis, and what the Copilot may say when external data is incomplete.

## Twist 2: Immediate purchase reflection

**Scenario:** The customer buys an asset. The customer expects the Wealth Copilot to reflect the change immediately.

Discuss event-driven updates, order/trade lifecycle, pending versus settled positions, price freshness, cache invalidation, idempotency and how the UI communicates provisional values.

## Twist 3: Personal data transparency

**Scenario:** The customer asks the bank to show exactly which personal data was used to generate an AI insight.

Discuss provenance, explainability, purpose limitation, data catalogs, response citations, audit records, retention and a customer-facing “why am I seeing this?” experience.

## Twist 4: Incorrect AI insight

**Scenario:** The AI gives the customer an incorrect investment-related insight. How does the bank detect, explain and remediate this?

Discuss groundedness checks, deterministic calculators, model evaluation, incident response, customer correction, advisor escalation, rollback, auditability and regulatory reporting.
