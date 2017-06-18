import React from 'react'

export default function childrenToString (e) {
  return React.Children.toArray(e).map(e => childrenToFlattenedString(e))
}

function childrenToFlattenedString (e) {
  if (React.Children.count(e) > 1) {
    const arr = React.Children.toArray(e)
    return arr.map(e => childrenToFlattenedString(e)).join('')
  } else if (typeof e === 'string') {
    return e
  } else if (e.type && e.props && e.props.children) {
    return childrenToFlattenedString(e.props.children)
  } else {
    return 'You are passing something not valid'
  }
}
