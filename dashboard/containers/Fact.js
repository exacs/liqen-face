import React from 'react'
import Annotation from '../components/Annotation'

const a1 = {
  title: 'Fuga de cerebros: ¿dolor de cabeza para Latinoamérica?',
  source: {
    uri: 'http://www.bancomundial.org/es/news/feature/2013/11/06/fuga-cerebros-latinoamerica'
  }
}

const q1 = {
  id: 1,
  title: '¿Quién es el mejor piloto de fórmula 1?',
  tags: []
}

const f = {
  id: 2,
  question: q1,
  annotations: [
    {
      id: 2,
      dimension: 'when',
      tags: [],
      article: a1,
      target: {
        type: 'TextQuoteSelector',
        prefix: 'Este éxodo coincide con el aumento de latinoamericanos con educación superior, que pasó de 23 a 40 millones entre ',
        exact: '1996 y 2007',
        suffix: ', según datos del Banco Mundial.'
      }
    },
    {
      id: 3,
      dimension: 'what',
      tags: [],
      article: a1,
      target: {
        type: 'TextQuoteSelector',
        prefix: 'Justamente en los países de la OCDE, donde ocurre alrededor del 70% de los intercambios mundiales de bienes y servicios, ',
        exact: 'el número de inmigrantes altamente calificados casi se duplicó en la última década',
        suffix: ', pasando de 12 a 20 millones de personas'
      }
    },
    {
      id: 4,
      dimension: 'who',
      tags: [],
      article: a1,
      target: {
        type: 'TextQuoteSelector',
        prefix: 'Este éxodo coincide con el aumento de latinoamericanos con educación superior, ',
        exact: 'pasó de 23 a 40 millones',
        suffix: ' entre 1996 y 2007, según datos del Banco Mundial.'
      }
    },
    {
      id: 5,
      dimension: 'where',
      tags: [],
      article: {
        title: 'Estados Unidos, destino de talento mexicano',
        source: {
          uri: 'http://www.bbc.com/mundo/noticias/2011/08/110810_migracion_profesionistas_mexico_an.shtml'
        }
      },
      target: {
        type: 'TextQuoteSelector',
        prefix: 'En 2000 había 411.000 de estos profesionales, y para 2010 ',
        exact: 'el número aumentó a más de un millón',
        suffix: '. Uno de cada cinco mexicanos con doctorado vive en Estados Unidos.'
      }
    }
  ]
}

const Fact = () => (
  <div>
    <header className='fact__header'>
      <div className='container'>
        <h3 className='display-4'>hecho #{f.id}</h3>
      </div>
    </header>
    <div className='container'>
      <div className='fact__question'>
        <span>Este hecho responde a la pregunta: </span>
        <a href={f.question.id}>{f.question.title}</a>
      </div>
      {
        f.annotations.map(annotation => (
          <Annotation
            key={annotation.id}
            dimension={annotation.dimension}
            target={annotation.target}
            article={annotation.article} />
        ))
      }
    </div>
  </div>
)

export default Fact
