import { CALL_API } from '../middlewares/call-api'

export const CREATE_ANNOTATION = 'CREATE_ANNOTATION'
export const CREATE_ANNOTATION_SUCCESS = 'CREATE_ANNOTATION_SUCCESS'
export const CREATE_ANNOTATION_PENDING = 'CREATE_ANNOTATION_PENDING'
export const CREATE_ANNOTATION_FAILURE = 'CREATE_ANNOTATION_FAILURE'

export const ADD_ANNOTATION_TO_LIQEN = 'ADD_ANNOTATION_TO_LIQEN'

export const CREATE_LIQEN = 'CREATE_LIQEN'
export const CREATE_LIQEN_SUCCESS = 'CREATE_LIQEN_SUCCESS'
export const CREATE_LIQEN_PENDING = 'CREATE_LIQEN_PENDING'
export const CREATE_LIQEN_FAILURE = 'CREATE_LIQEN_FAILURE'

let nextAnnotationRef = 0
// target = { prefix, suffix, exact }
// tag = integer (tag ID)
export function createAnnotation (target, tag) {
  const ref = `c-${nextAnnotationRef}`
  nextAnnotationRef++

  return {
    [CALL_API]: {
      type: CREATE_ANNOTATION,
      actions: [
        CREATE_ANNOTATION_PENDING,
        CREATE_ANNOTATION_SUCCESS,
        CREATE_ANNOTATION_FAILURE
      ],
      annotation: {
        target,
        tag
      },
      ref
    }
  }
}

// annotation = integer (annotation ref)
// tag = integer (tag ID)
export function addAnnotationToLiqen (annotation, tag) {
  return {
    type: ADD_ANNOTATION_TO_LIQEN,
    annotation,
    tag
  }
}

let nextLiqenRef = 0
// question = integer (question ID)
// annotations = array of IDs (annotation ref)
export function createLiqen (question, annotations) {
  const ref = `c-${nextLiqenRef}`
  nextLiqenRef++

  return {
    [CALL_API]: {
      type: CREATE_LIQEN,
      actions: [
        CREATE_LIQEN_PENDING,
        CREATE_LIQEN_SUCCESS,
        CREATE_LIQEN_FAILURE
      ],
      ref
    }
  }
}
