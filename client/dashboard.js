/**
 * Entry point for the client side JS of "dashboard"
 */
import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'

const Index = () => (<div>Hola2</div>)

const Example = () => (
  <BrowserRouter>
    <Route exact path="/" component={Index} />
  </BrowserRouter>
)

render(<Example />, document.getElementById('root'))
