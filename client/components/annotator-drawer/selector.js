import React from 'react'
import PropTypes from 'prop-types'
import SelectableAnnotation from './selectable-annotation'

export default function Selector ({ annotations, onSelect }) {
  return (
    <div>
      {
        annotations.map(annotation => (
          <div key={annotation.ref}>
            <SelectableAnnotation
              tag={annotation.tag}
              target={annotation.target}
              pending={annotation.pending}
              onSelect={() => onSelect(annotation)} />
          </div>
        ))
      }
    </div>
  )
}

Selector.propTypes = {
  annotations: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.string.isRequired,
      checked: PropTypes.bool,
      tag: PropTypes.string.isRequired,
      target: PropTypes.shape({
        prefix: PropTypes.string.isRequired,
        exact: PropTypes.string.isRequired,
        suffix: PropTypes.string.isRequired
      }),
      pending: PropTypes.bool,
      onSelect: PropTypes.func
    })
  )
}
