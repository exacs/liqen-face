import React from 'react'
import SelectableAnnotation from './selectable-annotation'

export default function Selector ({ annotations, onSelect }) {
  return (
    <div>
      {
        annotations.map(annotation => (
          <div key={annotation.ref}>
            <SelectableAnnotation
              annotation={annotation}
              pending={annotation.pending}
              onSelect={() => onSelect(annotation)} />
          </div>
        ))
      }
    </div>
  )
}
