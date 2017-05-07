import React from 'react'
import Question from './question'
import Article from './article'
import fetch from 'isomorphic-fetch'

class ArticleList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: [
        {
          id: 0,
          title: 'Example article',
          uri: 'http://localhost'
        }
      ]
    }
  }

  componentWillMount () {
    fetch('/backend')
      .then(response => response.json())
      .then(articles => this.setState({articles}))
  }

  render () {
    const articles = this.state.articles.map(({id, title, uri}) =>
      <Article key={id}
        title={title}
        uri={uri} />
    )

    return (
      <div>
        <Question title='Describa el flujo migratorio de talento en el mundo' />
        <h3 className='h6 my-4 text-muted'>
          Artículos propuestos para responder a la pregunta
        </h3>
        <main>
          {articles}
        </main>
      </div>
    )
  }
}

export default ArticleList
