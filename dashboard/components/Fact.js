import React from 'react'

const Fact = ({question, annotations}) => (
  <article className='card'>
    <div className='card-block'>
      <header className='card-title small'>
        <span>Respuesta a </span>
        <a href={`/questions/${question.id}`}>{question.title}</a>
      </header>
      <ul className='list-unstyled'>
        {
          annotations.map(annotation => (
            <li key={annotation.id}>
              <span className="font-weight-bold">{annotation.dimension}</span>
              <mark className="font-family-serif font-italic">{annotation.target.exact}</mark>
            </li>
          ))
        }
      </ul>
    </div>
  </article>
)

export default Fact
