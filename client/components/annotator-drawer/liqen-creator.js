import React from 'react'
import PropTypes from 'prop-types'

export default function LiqenCreator ({ onSubmit, onRemoveAnnotation, answer }) {
  return (
    <div className='card'>
      <div className='card-img-top bg-primary' style={{height: '5em'}}>
      </div>
      <div className='card-block'>
        <h4 className='card-title'>The Question</h4>
        <p className='card-text small'>Highlight <mark>Place of origin, Reason and Destination</mark> in the text to answer this question</p>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <span className='badge badge-default'># Place of origin</span>
          <blockquote className='w-100'>
            Super long long long logogneogn eiojfgieojf ioejf oejfeiof ejfoi
          </blockquote>
        </li>
        <li className='list-group-item'>
          <span className='badge badge-default'># Reason</span>
          <blockquote className='w-100'>
            Small
          </blockquote>
        </li>
        <li className='list-group-item'>
          <span className='badge badge-default'># Destination</span>
        </li>
      </ul>
      <div className='card-block text-right'>
        <button className="btn btn-outline-primary" disabled>Send Liqen Answer</button>
      </div>
    </div>
  )
}

LiqenCreator.propTypes = {
  answer: PropTypes.array,
  onRemoveAnnotation: PropTypes.func,
  onSubmit: PropTypes.func
}
