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
            <div className='text-right w-100'>
              <small>Created by you</small>
            </div>
            <div className='mb-1'>
              {
                liqen.answer.map(a => (
                  <div>
                    <span className='badge badge-default'># {a.tag.title}</span>
                    <div ref={a.ref}>{a.target.exact}</div>
                  </div>
                ))
              }
            </div>
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
