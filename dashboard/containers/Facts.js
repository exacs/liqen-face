import React from 'react'
import Fact from './../components/Fact'

const q1 = {
  id: 1,
  title: '¿Cuál es el estado de la migración de talento en los últimos años?',
  tags: []
}

const fs = [
  {
    id: 1,
    title: 'En México, la emigración calificada ha aumentado de 11.5% en 1975 a 15.2% en 2000.',
    question: q1
  },
  {
    id: 2,
    title: 'El número de inmigrantes cualificados casi se duplicó en la última década',
    question: q1
  },
  {
    id: 3,
    title: 'El número de latinoamericanos con educación superior pasó de 23 a 40 millones',
    question: q1
  },
  {
    id: 4,
    title: 'Entre 1.6 y 2 millones de venezolanos han emigrado en los últimos 10 años',
    question: q1
  }
]

const Facts = () => (
  <div>
    <header className='single-fact__header'>
      <div className='container'>
        <h3>Hechos</h3>
      </div>
    </header>
    <ul className='facts list-unstyled'>
      {
        fs.map(fact => (
          <li key={fact.id}>
            <Fact
              id={fact.id}
              question={fact.question}
              title={fact.title}
                annotations={fact.annotations} />
          </li>
        ))
      }
    </ul>
  </div>
)

export default Facts
