import React from 'react'
import PropTypes from 'prop-types'

export default function LiqensList ({ liqens }) {
  return (
    <div className='list-group list-group-flush'>
      {
        liqens.length > 0 && liqens.map(liqen => (
          <div
            className='list-group-item'
            key={liqen.ref}
          >
            Liqen
          </div>
        ))
      }
      {
        liqens.length === 0 && (
          <div className='list-group-item'>
            Create a Liqen to see it here
          </div>
        )
      }
    </div>
  )
}

LiqensList.propTypes = {
  liqens: PropTypes.array
}
