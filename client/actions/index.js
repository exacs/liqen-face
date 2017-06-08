import { CALL_API } from '../middlewares/call-api'
export const CREATE_ANNOTATION = 'CREATE_ANNOTATION'
export const CREATE_ANNOTATION_SUCCESS = 'CREATE_ANNOTATION_SUCCESS'
export const CREATE_ANNOTATION_PENDING = 'CREATE_ANNOTATION_PENDING'
export const CREATE_ANNOTATION_FAILURE = 'CREATE_ANNOTATION_FAILURE'

let nextRef = 0
export function createAnnotation (target, tag) {
  const ref = nextRef
  nextRef++

  return {
    [CALL_API]: {
      ref, target, tag
    }
  }
}
