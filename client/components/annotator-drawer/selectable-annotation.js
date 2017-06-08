import React from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './progress-bar'

export default class SelectableAnnotation extends React.Component {
  render () {
    return (
      <div onClick={() => this.props.onSelect()}>
        <div style={{ padding: '20px', position: 'relative' }}>
          <aside style={{ height: '30px', float: 'left' }}>
            <input type="checkbox" checked={this.props.checked || false} />
          </aside>
          <main style={{ marginLeft: '30px' }}>
            <div>
              {this.props.annotation.target.exact}
            </div>
            <footer>
              {this.props.annotation.tag.title}
            </footer>
          </main>
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
