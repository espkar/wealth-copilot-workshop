// Express app factory - separated from index.ts so tests can import the
// app without binding a real network port.
import express from 'express'
import cors from 'cors'
import { customersRouter } from './routes/customers.js'

export function createApp() {
  const app = express()
  app.use(cors())
  app.use(express.json())

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', service: 'wealth-copilot-api', timestamp: new Date().toISOString() })
  })

  app.use('/customers', customersRouter)

  app.use((_req, res) => {
    res.status(404).json({ error: 'Not found' })
  })

  return app
}
