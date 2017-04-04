/**
 * HTTP Server instance
 */
import express from 'express'

export default function () {
  const app = express()
  app.use('/static', express.static('public'))
  return app
}
