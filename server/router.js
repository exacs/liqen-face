/**
 * Router for "non-dashboard" pages
 */
import express from 'express'
import bodyParser from 'body-parser'
import { checkSession, login } from './auth'

const router = express.Router()
const loggedIn = false
const urlencodedParser = bodyParser.urlencoded({ extend: false })

router.get('/', (req, res, next) => {
  checkSession(req, res)
    .then(user => {
      req.currentUser = user
      next()
    })
    .catch(err => {
      res.send(`NO ECHTA LOGEADO CHEÑÓ - ${err.message}`)
    })
})

router.post('/login', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.send('LOGIN FAIL')
  }

  const { email, password } = req.body
  return login(email, password)
    .then(user => {
      res.send('I am IN')
    })
    .catch(() => {
      res.send('I am NOT IN')
    })
})

router.get('/login', (req, res) => {
  res.send('Login page')
})

router.get('*', (req, res, next) => {
  if (loggedIn) {
    res.send('This is REACT!!!')
  } else {
    res.send('404 Not found')
  }
})

export default router
