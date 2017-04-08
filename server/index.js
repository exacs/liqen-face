import express from 'express'
import path from 'path'
import http from 'http'
import router from './router'
import dashboard from './dashboard'

const app = express()
const PORT = process.env.PORT || 3000

app.set('views', path.join(process.cwd(), 'views'))
app.set('view engine', 'ejs')

app.use('/static', express.static('public'))

// Use non-dashboard router
app.use('/', router)

// Use dashboard router (React-Router)
app.use('/', dashboard)

// Use non-dashboard router only for "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'))
})

const server = http.Server(app)

server.listen(PORT, function () {
  console.log('Listening to port ', PORT)
})
