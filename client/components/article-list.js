import React from 'react'
import Question from './question'
import Article from './article'
import liqen from 'liqen'

class ArticleList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: [
        {
          id: 0,
          title: 'Example article',
          source: {
            uri: 'http://localhost'
          }
        }
      ]
    }
  }

  componentWillMount () {
    liqen('', { apiURI: 'http://localhost:4000' }).articles.index()
    //      .then(response => response.json())
      .then(articles => {console.log(articles); this.setState({articles})})
  }

  render () {
    const articles = this.state.articles.map(({id, title, source}) =>
      <Article key={id}
        id={id}
        title={title}
        link={source.uri} />
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
