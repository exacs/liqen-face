import liqen from 'liqen'
export const CALL_API = Symbol('call api')

export default store => next => action => {
  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  const { ref, target, tag } = callAPI

  // Send a pending
  next({
    type: 'CREATE_ANNOTATION_PENDING',
    ref,
    target,
    tag
  })

  // Send to the server the update
  liqen()
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
