import React from 'react'
import Fact from './../components/Fact'

const fs = [
  {
    id: 1,
    question: {
      id: 3,
      title: 'Some question'
    },
    annotations: [
      {
        id: 1,
        dimension: 'when',
        target: {
          type: 'TextQuoteSelector',
          prefix: 'aaaa ',
          exact: 'bbbb',
          suffix: ' cccc'
        }
      }
    ]
  }
]

const Facts = () => (
  <div className='container'>
    {
      fs.map(fact => (
        <Fact
          key={fact.id}
          question={fact.question}
          annotations={fact.annotations} />
      ))
    }
  </div>
)

export default Facts
