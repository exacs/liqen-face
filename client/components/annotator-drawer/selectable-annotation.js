import React from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './progress-bar'

export default class SelectableAnnotation extends React.Component {
  render () {
    return (
      <div className='card mb-2'>
        <div className='card-block'>
          <p className='card-text'>
            <span className="badge badge-default">
              # {this.props.tag}
            </span>
            <blockquote className='mb-0'>
              {this.props.target.exact}
            </blockquote>
            <footer className='text-right'>
              <button
                className='btn btn-link btn-sm'
                onClick={() => this.props.onSelect()}
              >
                Add to answer
              </button>
            </footer>
          </p>
        </div>
        <ProgressBar completed={!this.props.pending} />
      </div>
    )
  }
}

SelectableAnnotation.propTypes = {
  checked: PropTypes.bool,
  tag: PropTypes.string.isRequired,
  target: PropTypes.shape({
    prefix: PropTypes.string.isRequired,
    exact: PropTypes.string.isRequired,
    suffix: PropTypes.string.isRequired
  }),
  pending: PropTypes.bool,
  onSelect: PropTypes.func
}
