import React from 'react'
import { connect } from 'react-redux'
import zipWith from 'lodash/fp/zipWith'
import fetch from 'isomorphic-fetch'

import Article from '../components/annotator/article'
import MultiList from '../components/annotator-drawer/multi-list'
import LiqenCreator from '../components/annotator-drawer/liqen-creator'
import { createAnnotation, createLiqen } from '../actions/index'

const article = window.__ARTICLE__

export class Annotate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      articleBody: {
        name: 'div',
        attrs: {},
        children: []
      }
    }
  }

  componentDidMount () {
    fetch(`/parseArticle?uri=${article.source.uri}`)
      .then(response => response.json())
      .then(obj => {
        this.setState({articleBody: obj.body.object})
      })
  }

  render () {
    const {
      question,
      answer,
      annotations,
      liqens,
      tags,
      onCreateAnnotation,
      onCreateLiqen
    } = this.props

    return (
      <div className='row'>
        <aside className='hidden-md-down col-lg-4 flex-last'>
          <h3 className='h6 text-uppercase text-muted'>Create your Liqen (your Answer)</h3>
          <LiqenCreator
            question={question}
            answer={answer}
            onSubmit={onCreateLiqen}
          />
          <MultiList
            annotations={annotations}
            liqens={liqens}
          />
        </aside>
        <div className='col-lg-8 col-xl-7'>
          <header>
            <h1 className="article-title">{article.title}</h1>
          </header>
          <main className='article-body'>
            <Article
              body={this.state.articleBody}
              tags={tags}
              onCreateAnnotation={onCreateAnnotation}
            />
          </main>
        </div>
      </div>
    )
  }
}

const mapStateToAnswer = (state) => {
  const questionAnswer = state.question.answer.map(
    ({tag, required}) => ({
      tag: state.tags[tag].title,
      required
    })
  )

  const liqenAnswer = state.newLiqen.answer.map(
    a => state.annotations[a] || null
  )

  const zipper = (qa, la) => ({
    title: qa.tag,
    exact: (la && la.target && la.target.exact) || ''
  })
  return zipWith(zipper, questionAnswer, liqenAnswer)
}

const mapStateToAnnotations = (state) => {
  const ret = []

  for (let ref in state.annotations) {
    const {tag, checked, pending, target} = state.annotations[ref]

    ret.push({
      tag: state.tags[tag].title,
      ref,
      target,
      checked,
      pending
    })
  }

  return ret
}

const mapStateToLiqens = (state) => {
  const ret = []

  for (let ref in state.liqens) {
    const {answer, pending} = state.liqens[ref]

    ret.push({
      answer: answer
        .map(a => {
          if (!state.annotations[a]) {
            return null
          }

          const {tag, target} = state.annotations[a]

          return {
            target,
            ref: a,
            tag: state.tags[tag]
          }
        })
        .filter(a => a !== null),
      ref,
      pending
    })
  }

  return ret
}

const mapStateToProps = (state) => ({
  question: state.question.title,
  answer: mapStateToAnswer(state),
  annotations: mapStateToAnnotations(state),
  liqens: mapStateToLiqens(state),
  tags: state.question.answer.map(
    ({tag}) => ({ref: tag, title: state.tags[tag].title})
  ),
  enableCreateLiqen: state.newLiqen.answer.every(
    a => state.annotations[a] && !state.annotations[a].pending
  )
})
const mapDispatchToProps = (dispatch) => ({
  onCreateAnnotation: ({target, tag}) => dispatch(createAnnotation(target, tag)),
  onCreateLiqen: () => dispatch(createLiqen())
})
const mergeProps = (stateProps, dispatchProps) =>
  Object.assign({}, stateProps, dispatchProps, {
    onCreateLiqen: stateProps.enableCreateLiqen && dispatchProps.onCreateLiqen
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Annotate)
