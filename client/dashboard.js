/**
 * Entry point for the client side JS of "dashboard"
 */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Root from '../dashboard/Root'
import { render } from 'react-dom'

render(<BrowserRouter><Root /></BrowserRouter>, document.getElementById('root'))
