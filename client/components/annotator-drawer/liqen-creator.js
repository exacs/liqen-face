import React from 'react'
import PropTypes from 'prop-types'

export default function LiqenCreator ({ onSubmit, answer, question }) {
  const tags = answer.map(
    (a, i) => a.title && a.exact
          ? <mark><strike>{a.title}</strike></mark>
          : <mark>{a.title}</mark>
  )
  const complete = answer.every(a => a.title && a.exact)

  const pluralize = (tags) => {
    const ret = []
    const exceptLast = tags.slice(0, -1)
    const last = tags[tags.length - 1]

    exceptLast.forEach(tag => {
      ret.push(tag)
      ret.push(', ')
    })
    ret[ret.length - 1] = ' and '
    ret.push(last)

    return ret
  }

  return (
    <div className='card'>
      <div className='card-img-top bg-primary' style={{height: '5em'}}>
      </div>
      <div className='card-block'>
        <h4 className='card-title'>{question}</h4>
        {
          !complete && (
            <p className='card-text small'>
              <span>Highlight </span>
              {
                tags.length === 1 ? tags : pluralize(tags)
              }
              <span> in the text to answer this question</span>
            </p>
          )
        }
      </div>
      {
        complete && (
          <div>
            <ul className='list-group list-group-flush'>
              {
                answer.map(({title, exact}, i) => (
                  <li
                    className='list-group-item'
                    key={i}
                  >
                    <span className='badge badge-default'># {title}</span>
                    <blockquote className='w-100'>{exact}</blockquote>
                  </li>
                ))
              }
            </ul>
            <div className='card-block text-right'>
              <button
                className="btn btn-outline-primary"
                disabled={!onSubmit}
                onClick={() => onSubmit()}>Send Liqen Answer</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

LiqenCreator.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      exact: PropTypes.string.isRequired
    })
  ).isRequired,
  onSubmit: PropTypes.func
}
