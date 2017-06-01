import React from 'react'
import ReactDOM from 'react-dom'
import Annotator from './components/annotator'

const question = JSON.parse(window.QUESTION)
const tags = question.answer.map(a => a.tag)
console.log(tags)

function convertObjectToReact (obj) {
  if (typeof obj === 'string') {
    return obj
  } else {
    const children = obj.children.map(convertObjectToReact)

    if (children.length === 1) {
      return React.createElement(obj.name, obj.attrs, children[0])
    } else {
      return React.createElement(obj.name, obj.attrs, children)
    }
  }
}


const encapsulated = JSON.parse(window.BODY_JSON).children.map(child => (
  <Annotator
    annotations={[]}
    tags={tags}
  >
    {convertObjectToReact(child)}
  </Annotator>
))

ReactDOM.render(
  <div>{encapsulated}</div>,
  document.getElementById('article-body')
)
