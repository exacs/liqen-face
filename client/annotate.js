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
  reducer(),
  composeEnhancers(applyMiddleware(callAPI))
)

ReactDOM.render(
  <Provider store={store}>
    <Annotate />
  </Provider>,
  document.getElementById('react-root')
)
