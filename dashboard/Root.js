import React from 'react'
import { Switch, Route } from 'react-router'
import Facts from './containers/Facts'

const Root = () => (
  <div>
    <nav className='navbar navbar-inverse bg-inverse'>
      <a className='navbar-brand' href="/">Liqen Dashboard</a>
    </nav>
    <ol className='breadcrumb'>
      <li className='breadcrumb-item'>Facts</li>
    </ol>
    <Switch>
      <Route exact path="/" component={Facts} />
    </Switch>
  </div>
)

export default Root
