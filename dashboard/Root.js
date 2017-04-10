import React from 'react'
import { Switch, Route } from 'react-router'

const Index = () => (<div>Hola</div>)

const Root = () => (
  <Switch>
    <Route exact path="/" component={Index} />
  </Switch>
)

export default Root
