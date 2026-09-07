import { describe, expect, it } from 'vitest'
import request from 'supertest'
import { createApp } from '../src/app.js'
import { customers } from '../src/data.js'

const app = createApp()
const sampleCustomerId = customers[0].customer_id

describe('GET /health', () => {
  it('returns ok status', async () => {
    const res = await request(app).get('/health')
    expect(res.status).toBe(200)
    expect(res.body.status).toBe('ok')
  })
})

describe('GET /customers/:customerId', () => {
  it('returns a known customer', async () => {
    const res = await request(app).get(`/customers/${sampleCustomerId}`)
    expect(res.status).toBe(200)
    expect(res.body.customer_id).toBe(sampleCustomerId)
  })

  it('returns 404 for an unknown customer', async () => {
    const res = await request(app).get('/customers/CUST-99999')
    expect(res.status).toBe(404)
  })
})

describe('GET /customers/:customerId/portfolio', () => {
  it('calculates allocation percentages that sum close to 100', async () => {
    const res = await request(app).get(`/customers/${sampleCustomerId}/portfolio`)
    expect(res.status).toBe(200)
    const total = res.body.allocation_by_asset_type.reduce((sum: number, s: { percentage: number }) => sum + s.percentage, 0)
    if (res.body.total_value > 0) {
      expect(total).toBeGreaterThan(99)
      expect(total).toBeLessThan(101)
    }
  })

  it('returns 404 for an unknown customer', async () => {
    const res = await request(app).get('/customers/CUST-99999/portfolio')
    expect(res.status).toBe(404)
  })
})

describe('GET /customers/:customerId/risk', () => {
  it('returns a risk score within 0-100 and a disclaimer', async () => {
    const res = await request(app).get(`/customers/${sampleCustomerId}/risk`)
    expect(res.status).toBe(200)
    expect(res.body.risk_score).toBeGreaterThanOrEqual(0)
    expect(res.body.risk_score).toBeLessThanOrEqual(100)
    expect(res.body.disclaimer).toMatch(/educational|demo/i)
  })
})

describe('GET /customers/:customerId/transactions', () => {
  it('aggregates transactions belonging only to that customer', async () => {
    const res = await request(app).get(`/customers/${sampleCustomerId}/transactions`)
    expect(res.status).toBe(200)
    expect(res.body.transactions.length).toBeGreaterThan(0)
    expect(res.body.transactions.every((t: { customer_id: string }) => t.customer_id === sampleCustomerId)).toBe(true)
  })
})

describe('POST /customers/:customerId/copilot', () => {
  it('answers a performance question', async () => {
    const res = await request(app)
      .post(`/customers/${sampleCustomerId}/copilot`)
      .send({ message: 'How has my portfolio performed?' })
    expect(res.status).toBe(200)
    expect(res.body.matched_intent).toBe('performance')
  })

  it('rejects an empty message', async () => {
    const res = await request(app).post(`/customers/${sampleCustomerId}/copilot`).send({ message: '' })
    expect(res.status).toBe(400)
  })
})
