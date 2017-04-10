/**
 * Entry point for the client side JS of "dashboard"
 */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Root from '../dashboard/Root'
import { render } from 'react-dom'
import './scss/something.scss'
import './scss/bootstrap/bootstrap.scss'
import './scss/components/annotation.scss'
import './scss/components/fact.scss'

render(<BrowserRouter><Root /></BrowserRouter>, document.getElementById('root'))
