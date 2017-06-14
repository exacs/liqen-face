import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/index'
import callAPI from './middlewares/call-api'
import Annotate from './containers/Annotate'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  JSON.parse(window.__INITIAL_STATE__),
  composeEnhancers(applyMiddleware(callAPI))
)

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('react-root')
  )
}

render(Annotate)

if (module.hot) {
  module.hot.accept('./containers/Annotate', () => render(Annotate))
}
