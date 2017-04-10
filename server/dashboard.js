/**
 * Router for "dashboard" pages
 */
import express from 'express'
import React from 'react'
import { StaticRouter } from 'react-router'
import Root from '../dashboard/Root'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import reducer from '../dashboard/reducers/index'

const router = express.Router()
const store = createStore(reducer, {})

router.use((req, res, next) => {
  // Check if the user is logged in...
  const logged = true

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
      <Root store={store} />
    </StaticRouter>
  )

  res.render('dashboard', {
    rootComponent: html,
    initialState: {}
  })
})

export default router
