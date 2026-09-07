# Workshop challenge: Build the Wealth Copilot

## Challenge

Design and prototype a Wealth Copilot that provides customers with a consolidated and intelligent view of their financial situation.

Start with the working demo in this repository. Participants can inspect the API, extend the frontend, change the synthetic data and use the prompts in `/prompts` with GitHub Copilot CLI.

## Questions to answer

1. What data should be collected?
2. How should the data platform be designed?
3. Which technologies should be used?
4. How should data quality be ensured?
5. How should security and privacy be handled?
6. How can AI create value?
7. How should real-time data be handled?
8. What are the major risks?

## Suggested working stages

### 1. Understand the baseline

Run the application, switch between fictional customers and inspect the API responses behind Dashboard, Portfolio, Insights and Wealth Copilot.

### 2. Pick a customer problem

Examples include cash-flow coaching, portfolio diversification explanation, pension planning, external-asset consolidation or transparent data provenance.

### 3. Design the data flow

Identify the source data, freshness requirement, quality rules, identity/consent needs and the API or event that supports the experience.

### 4. Prototype

Use the existing API and UI patterns. Keep calculations deterministic and explainable. If adding an AI layer, define what the model may and may not do.

### 5. Evaluate

Test normal and edge cases, inspect data lineage, challenge assumptions and explain failure handling.

## Final deliverables

- working prototype
- architecture diagram
- technology choices
- business value
- risks and challenges
- short explanation of data quality, privacy and AI governance

## Definition of done

The prototype should work for at least one fictional customer, show where its data came from, handle missing or stale data visibly, and avoid presenting the educational risk score as financial advice.
