import React from 'react'

const Annotation = ({article, target, dimension}) => (
  <article className='annotation'>
    <h4 className='annotation__dimension'>{dimension}</h4>
    <header className='annotation__header'>
    </header>
    <blockquote className='annotation__body'>
      <span>{target.prefix}</span>
      <mark className='annotation__highlight'>
        {target.exact}
      </mark>
      <span>{target.suffix}</span>
    </blockquote>
    <footer className='annotation__footer'>
      Fuente: <a href={article.source || ''}>{article.title}</a>
    </footer>
  </article>
)

export default Annotation
