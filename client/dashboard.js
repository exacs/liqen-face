/**
 * Entry point for the client side JS of "dashboard"
 */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Root from '../dashboard/Root'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducer from '../dashboard/reducers/index'

import './scss/something.scss'
import './scss/bootstrap/bootstrap.scss'
import './scss/components/annotation.scss'
import './scss/components/single-fact.scss'
import './scss/components/fact.scss'

const store = createStore(reducer, window.__INITIAL_STATE__)

render(
  <BrowserRouter>
    <Root store={store} />
  </BrowserRouter>,
  document.getElementById('root')
)
