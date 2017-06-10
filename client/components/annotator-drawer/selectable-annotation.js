import React from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './progress-bar'

export default class SelectableAnnotation extends React.Component {
  render () {
    return (
      <div className='card mb-2' onClick={() => this.props.onSelect()}>
        <div className='card-block'>
          <p className='card-text'>
            <span className="badge badge-default">
              # {this.props.annotation.tag.title}
            </span>
            <blockquote className='mb-0'>
              {this.props.annotation.target.exact}
            </blockquote>
          </p>
        </div>
        <ProgressBar completed={!this.props.pending} />
      </div>
    )
  }
}

SelectableAnnotation.propTypes = {
  checked: PropTypes.bool,
  annotation: PropTypes.object,
  pending: PropTypes.bool,
  onSelect: PropTypes.func
}
