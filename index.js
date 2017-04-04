/**
 * Script that serves as entry point to build the Server in Production mode.
 */
import http from 'http'
import httpServer from './server/http'

const PORT = process.env.PORT || 3000
const app = httpServer()
const server = http.Server(app)

server.listen(PORT, function () {
  console.log('Listening to port ', PORT)
})
