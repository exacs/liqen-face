import React from 'react'
import SelectableAnnotation from './selectable-annotation'

export default function Selector ({ annotations, onSelect }) {
  return (
    <ul>
      {
        annotations.map(annotation => (
          <li key={annotation.ref}>
            <SelectableAnnotation
              annotation={annotation}
              pending={annotation.pending}
              onSelect={() => onSelect(annotation)} />
          </li>
        ))
      }
    </ul>
  )
}
