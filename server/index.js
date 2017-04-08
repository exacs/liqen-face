import express from 'express'
import path from 'path'
import http from 'http'
import router from './router'

const app = express()
const PORT = process.env.PORT || 3000

// Use non-dashboard router
app.use('/', router)

// Use dashboard router (React-Router)
// TODO

// Use non-dashboard router only for "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'))
})

// Everything else
app.use('/static', express.static('public'))

const server = http.Server(app)

server.listen(PORT, function () {
  console.log('Listening to port ', PORT)
})
