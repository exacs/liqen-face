import React from 'react'
import { connect } from 'react-redux'

import Annotator from '../components/annotator'
import Selector from '../components/annotator-drawer/selector'
import { createAnnotation } from '../actions/index'

const question = JSON.parse(window.QUESTION)
const tags = question.answer.map(a => a.tag)

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

const EncapsulatedArticle = ({ onCreateAnnotation }) => (
  <div>
    {
      JSON.parse(window.BODY_JSON).children.map(child => (
        <Annotator
          annotations={[]}
          tags={tags}
          onCreateAnnotation={onCreateAnnotation}
        >
          {convertObjectToReact(child)}
        </Annotator>
      ))
    }
  </div>
)

export function Annotate ({ annotations, onCreateAnnotation }) {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <aside className='hidden-md-down col-lg-4 flex-last'>
          <Selector
            annotations={annotations}
            onSelect={() => console.log('heyheyhey') }/>
        </aside>
        <div className='col-lg-8 col-xl-7'>
          <main>
            <EncapsulatedArticle onCreateAnnotation={onCreateAnnotation} />
          </main>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  annotations: state
})
const mapDispatchToProps = (dispatch) => ({
  onCreateAnnotation: ({target, tag}) => dispatch(createAnnotation(target, tag))
})

export default connect(mapStateToProps, mapDispatchToProps)(Annotate)
