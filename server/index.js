import express from 'express'
import path from 'path'
import http from 'http'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'))
})

app.get('/how', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'how.html'))
})

app.get('/questions', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'questions.html'))
})

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'dashboard.html'))
})

app.use('/static', express.static('public'))

const server = http.Server(app)

server.listen(PORT, function () {
  console.log('Listening to port ', PORT)
})
