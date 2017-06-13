import liqen from 'liqen'
import fakeLiqen from '../../server/local-liqen'
import cookies from 'cookies-js'
import * as ActionType from '../actions'

export const CALL_API = Symbol('call api')

export default store => next => action => {
  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  const token = cookies.get('access_token')
  let core = liqen(token)

  if (process.env.NODE_ENV === 'development') {
    core = fakeLiqen(token)
  }

  // Middleware starts here
  const { ref, type, actions } = callAPI

  // Prepare things to send to the server
  let payload = {}
  let fn = function fn () {}
  let key = ''

  switch (type) {
    case ActionType.CREATE_ANNOTATION:
      const tag = callAPI.annotation.tag
      payload = {
        article_id: 1,
        target: {
          type: 'TextQuoteSelector',
          prefix: callAPI.annotation.target.prefix,
          exact: callAPI.annotation.target.exact,
          suffix: callAPI.annotation.target.suffix
        },
        tags: [store.getState().tags[tag].id]
      }
      fn = core.annotations.create
      key = 'annotation'
      break

    case ActionType.CREATE_LIQEN:
      payload = {
        article_id: 1,
        annotations: store.getState().newLiqen.answer.map(
          a => store.getState().annotations[a].id
        )
      }
      fn = core.liqens.create
      key = 'liqen'
      break
  }

  // Prepare what to send to the Store
  let localPayload = {}
  switch (type) {
    case ActionType.CREATE_ANNOTATION:
      localPayload = {
        tag: callAPI.annotation.tag,
        target: callAPI.annotation.target
      }
      break

    case ActionType.CREATE_LIQEN:
      localPayload = {}
      break
  }

  // Send a pending
  next({
    ref,
    type: actions[0],
    [key]: localPayload
  })

  // Call API
  fn(payload)
    .then(object => next({
      ref,
      type: actions[1],
      [key]: object
    }))
    .catch(err => next({
      ref,
      type: actions[2],
      error: err
    }))
}
