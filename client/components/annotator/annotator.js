/* global document */
/**
 * Le Grand Annotator
 *
 * Inputs
 * - Array of tags
 *
 * Callbacks
 * - onAnnotate()  - Create an annotation (tag + target)
 */

import React from 'react'
import PropTypes from 'prop-types'

import Highlighter from './highlighter'
import TaggerTooltip from './tagger-tooltip'

export default class Annotator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedAnnotation: null,
      newAnnotation: {
        target: null
      }
    }

    this.handleSelectAnnotation = this.handleSelectAnnotation.bind(this)
    this.handleHighlight = this.handleHighlight.bind(this)
    this.handleUnhighlight = this.handleUnhighlight.bind(this)
  }

  handleSelectAnnotation (selectedAnnotation) {
    this.setState({ selectedAnnotation })
  }

  handleHighlight (fragment, range) {
    this.setState({
      newAnnotation: { target: fragment, range: range.getBoundingClientRect() }
    })
  }

  handleUnhighlight () {
    this.setState({
      selectedAnnotation: null,
      newAnnotation: { target: null }
    })
  }

  handleSelectTag (tag) {
    if (this.state.newAnnotation.target) {
      this.props.onCreateAnnotation({
        target: this.state.newAnnotation.target,
        tag
      })

      document.getSelection().removeAllRanges()
      this.setState({
        selectedAnnotation: null,
        newAnnotation: { target: null }
      })
    }
  }

  handleUnselectTag () {
    this.props.onDeleteAnnotation(this.state.selectedAnnotation)
    this.setState({ selectedAnnotation: null })
  }

  render () {
    const selectedTag =
      this.state.selectedAnnotation && this.state.selectedAnnotation.tag

    const selectedFragment =
      this.state.selectedAnnotation && this.state.selectedAnnotation.target

    return (
      <div>
        <div ref={node => (this.paragraph = node)}>
          <Highlighter
            onHighlight={(fragment, range) =>
              this.handleHighlight(fragment, range)}
            onUnhighlight={() => this.handleUnhighlight()}
            fragment={selectedFragment}
          >
            {this.props.children}
          </Highlighter>
        </div>
        <div ref={node => (this.tooltip = node)}>
          {(selectedTag || this.state.newAnnotation.target) &&
           <TaggerTooltip
             list={this.props.tags}
             selected={selectedTag}
             position={this.state.newAnnotation.range}
             onSelect={tag => this.handleSelectTag(tag)}
             onUnselect={() => this.handleUnselectTag()}
           />}
        </div>
      </div>
    )
  }
}

Annotator.propTypes = {
  annotations: PropTypes.array,
  tags: PropTypes.array,
  children: PropTypes.node,
  onCreateAnnotation: PropTypes.func.isRequired,
  onDeleteAnnotation: PropTypes.func
}
