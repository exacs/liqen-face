/**
 * Router for "non-dashboard" pages
 */
import express from 'express'

const router = express.Router()
const loggedIn = false

router.get('/', (req, res, next) => {
  if (loggedIn) {
    next()
  } else {
    res.redirect('/login')
  }
})

router.post('/login', (req, res) => {
  const success = true
  // Call core
  // ...
  if (success) {
    // Set cookies
    // Redirect to '/'
    res.redirect('/')
  } else {
    res.send('Login page with errors')
  }
})

router.get('/login', (req, res) => {
  if (loggedIn) {
    res.redirect('/')
  } else {
    res.send('Login page')
  }
})

router.get('*', (req, res, next) => {
  if (loggedIn) {
    res.send('This is REACT!!!')
  } else {
    res.send('404 Not found')
  }
})

export default router
