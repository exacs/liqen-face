import React from 'react'

const Fact = ({id, title}) => (
  <article className='fact'>
    <div className='container'>
      <div className='fact__container'>
        <div className='fact__id'>#{id}</div>
        <div className='fact__title'>{title}</div>
      </div>
    </div>
  </article>
)

export default Fact
