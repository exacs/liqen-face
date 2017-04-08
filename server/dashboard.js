/**
 * Router for "non-dashboard" pages
 */
import express from 'express'
import React from 'react'
import { Switch, Route, StaticRouter } from 'react-router'
import { renderToString } from 'react-dom/server'

const Index = () => (<div>Hola</div>)
const router = express.Router()

router.use((req, res, next) => {
  // Check if the user is logged in...
  const logged = !true

  if (logged) {
    next()
  } else {
    next('router')
  }
})

router.get('*', (req, res) => {
  const context = {}

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </StaticRouter>
  )

  res.render('dashboard', {
    rootComponent: html,
    initialState: {}
  })
})

export default router
