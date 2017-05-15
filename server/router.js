/**
 * Router for "non-dashboard" pages
 */
import express from 'express'
import bodyParser from 'body-parser'
import { checkSession, login } from './middlewares'

const router = express.Router()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', checkSession, (req, res, next) => {
  res.render('dashboard')
})

router.get('/team', (req, res, next) => {
  res.render('team')
})

router.post('/login', urlencodedParser, login, (req, res) => {
  res.redirect('/')
})

router.get('/login', (req, res) => {
  res.render('index')
})

// Temporal backend.
//
// In a future, replace this with a GraphQL endpoint
router.get('/backend', (req, res) => {
  req
    .core.articles.index()
    .then(articles => res.json(articles))
    .catch(err => res.json(err))
})

router.get('*', (req, res, next) => {
  res.send('404 Not found')
})

export default router
