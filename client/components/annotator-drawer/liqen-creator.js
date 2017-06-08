import React from 'react'
import PropTypes from 'prop-types'

export default function LiqenCreator ({ onSubmit, onRemoveAnnotation, answer }) {
  return (
    <div>
      <dl>
        {
          answer.map(({ annotation, tag, required }) => (
            <div key={tag.id}>
              <dt>
                {tag.title}
              </dt>
              <dd>
                {
                  annotation
                  ? (
                    <div>
                      {annotation.target.exact}
                      <button type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  )
                  : (
                    <div>
                      No annotation selected
                    </div>
                  )
                }
              </dd>
            </div>
          ))
        }
      </dl>
      <button onClick={() => onSubmit()}>Create Liqen</button>
    </div>
  )
}

LiqenCreator.propTypes = {
  answer: PropTypes.array,
  onRemoveAnnotation: PropTypes.func,
  onSubmit: PropTypes.func
}
