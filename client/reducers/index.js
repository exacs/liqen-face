import * as ActionTypes from '../actions/index'

const initialState = []

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.CREATE_ANNOTATION_PENDING:
      return state.concat({
        ref: action.ref,
        target: action.target,
        tag: action.tag,
        pending: true
      })

    case ActionTypes.CREATE_ANNOTATION_SUCCESS:
    case ActionTypes.CREATE_ANNOTATION_FAILURE:
      return state.map(a => action.ref === a.ref
                        ? {
                          ref: a.ref,
                          target: a.target,
                          tag: a.tag,
                          pending: false
                        }
                        : a)

    default:
      return state
  }
}
