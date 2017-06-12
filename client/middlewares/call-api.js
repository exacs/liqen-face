import liqen from 'liqen'
import fakeLiqen from '../../server/local-liqen'
import cookies from 'cookies-js'

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

  const { ref, target, tag } = callAPI

  // Send a pending
  next({
    type: 'CREATE_ANNOTATION_PENDING',
    ref,
    target,
    tag
  })

  // Add annotation to liqen
  next({
    type: 'ADD_ANNOTATION_TO_LIQEN',
    annotation: ref,
    tag
  })

  // Send to the server the update
  core
    .annotations
    .create({
      article_id: 1,
      target: {
        type: 'TextQuoteSelector',
        prefix: target.prefix,
        exact: target.exact,
        suffix: target.suffix
      },
      tags: [tag]
    })
    .then(({id}) => next({
      type: 'CREATE_ANNOTATION_SUCCESS',
      ref,
      id,
      target,
      tag
    }))
    .catch(() => next({
      type: 'CREATE_ANNOTATION_FAILURE',
      ref,
      target,
      tag
    }))
}
