import * as ActionTypes from '../actions/index'

const initialState = {
  question: {
    id: 0,
    title: '',
    answer: [
      {
        tag: {
          id: 0,
          title: 'tag 0'
        },
        required: true,
        annotation: 0
      }
    ]
  },
  annotations: []
}

export default function reducer (state = initialState, action = {}) {
  return {
    question: questionReducer(state.question, action),
    annotations: annotationReducer(state.annotations, action)
  }
}

function questionReducer (state = initialState.question, action) {
  switch (action.type) {
    case ActionTypes.ADD_ANNOTATION_TO_LIQEN:
      return {
        title: state.title,
        id: state.id,
        answer: state.answer.map(a => {
          if (action.tag.id === a.tag.id) {
            return {
              tag: a.tag,
              required: a.required,
              annotation: action.annotation
            }
          } else {
            return a
          }
        })
      }

    default:
      return state
  }
}

function annotationReducer (state = initialState.annotations, action = {}) {
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
                          pending: false,
                          id: action.id
                        }
                        : a)

    default:
      return state
  }
}
