/**
 * Router for "non-dashboard" pages
 */
import express from 'express'
import bodyParser from 'body-parser'
import { checkSession, login } from './middlewares'
import { downloadArticle } from 'liqen-scrapper'

const router = express.Router()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', checkSession, (req, res, next) => {
  res.render('dashboard')
})

router.get('/annotate', checkSession, async function (req, res, next) {
  if (!req.query.article || !req.query.question) {
    return res.redirect('/')
  }

  const articleId = req.query.article
  const questionId = req.query.question

  // Take the question and its tags
  async function getQuestionAndTags () {
    const question = await req.core.questions.show(questionId)
    const answer = question.answer.map(async (answer) => {
      const tag = await req.core.tags.show(answer.tag)
      return {
        tag,
        required: answer.required
      }
    })
    question.answer = await Promise.all(answer)
    return question
  }

  // Take the article and parse it
  async function getArticle () {
    const article = await req.core.articles.show(articleId)
    const content = await downloadArticle(article.source.uri)
    article.content = content
    return article
  }

  // Paralelize
  const [question, article] = await Promise.all([
    getQuestionAndTags(),
    getArticle()
  ])

  return res.render('annotate', {question, article})
})

router.get('/about', (req, res, next) => {
  res.render('about')
})

router.post('/login', urlencodedParser, login, (req, res) => {
  res.redirect('/')
})

router.get('/login', (req, res) => {
  res.render('index')
})

// Temporal backend.
//
// In a future, replace this with a GraphQL endpoint
router.get('/backend', (req, res) => {
  req
    .core.articles.index()
    .then(articles => res.json(articles))
    .catch(err => res.json(err))
})

router.get('*', (req, res, next) => {
  res.send('404 Not found')
})

export default router
