import React from 'react'
import { Switch, Route } from 'react-router'
import Dumb from './components/Dumb'
import Fact from './containers/Fact'

const Root = () => (
  <div>
    <nav className='navbar navbar-inverse bg-inverse'>
      <a className='navbar-brand' href="/">Liqen Dashboard</a>
    </nav>
    <Switch>
      <Route exact path="/" component={Dumb} />
      <Route path='/facts/:id' component={Fact} />
    </Switch>
  </div>
)

export default Root
