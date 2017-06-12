import React from 'react'
import { connect } from 'react-redux'

import Annotator from '../components/annotator'
import Selector from '../components/annotator-drawer/selector'
import LiqenCreator from '../components/annotator-drawer/liqen-creator'
import { createAnnotation } from '../actions/index'

const question = JSON.parse(window.QUESTION)
const tags = question.answer.map(a => a.tag)

function convertObjectToReact (obj, key) {
  if (typeof obj === 'string') {
    return obj
  } else {
    const children = obj.children.map((item, i) => convertObjectToReact(item, i))

    if (children.length === 1) {
      return React.createElement(obj.name, Object.assign({key}, obj.attrs), children[0])
    } else {
      return React.createElement(obj.name, Object.assign({key}, obj.attrs), children)
    }
  }
}

const EncapsulatedArticle = ({ onCreateAnnotation }) => (
  <div>
    {
      JSON.parse(window.BODY_JSON).children.map((child, i) => (
        <Annotator
          key={i}
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
          <LiqenCreator />
          <Selector
            annotations={annotations}
            onSelect={() => console.log('heyheyhey') }/>
        </aside>
        <div className='col-lg-8 col-xl-7'>
          <main className='article-body'>
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
