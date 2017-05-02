import express from 'express'
import path from 'path'
import http from 'http'
import core from 'liqen'
import router from './router'
import client from './client-middleware'

const app = express()
const PORT = process.env.PORT || 3000
const server = http.Server(app)

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackDev = require('webpack-dev-middleware')
  const webpackHot = require('webpack-hot-middleware')
  const webpackConfig = require('../webpack.config.dev')
  const compiler = webpack(webpackConfig)
  const options = {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }

  app.use(webpackDev(compiler, options))
  app.use(webpackHot(compiler))
}

app.set('views', path.join(process.cwd(), 'views'))
app.set('view engine', 'ejs')

app.use('/static', express.static('public'))

if (process.env.NODE_ENV === 'development') {
  const localCore = require('./local-liqen')
  app.use(client(localCore))
} else {
  app.use(client(core))
}

app.use('/', router)

server.listen(PORT, function () {
  console.log('Listening to port ', PORT)
})
