/**
 * Script that serves as entry point for the Server
 */
const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.use('/static', express.static('public'))

const server = http.Server(app)

server.listen(PORT, function () {
  console.log('Listening to port ', PORT)
})