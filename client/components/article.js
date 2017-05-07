import React from 'react'

const Article = ({ link, title }) => (
  <div className='card'>
    <img className='card-img-top'
      src='http://www.bancomundial.org/content/dam/Worldbank/Feature%20Story/lac/pe-university-education-pucp-400x264.jpg'
      alt='Card image cap' />
    <div className='card-block'>
      <h4 className='card-title'>
        <a href={link}>
          {title}
        </a>
      </h4>
      <p className='card-text'>
        <small className='text-muted'>06 de noviembre de 2016</small>
      </p>
    </div>
  </div>
)

export default Article
