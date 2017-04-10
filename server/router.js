/**
 * Router for "non-dashboard" pages
 */
import express from 'express'
import path from 'path'

const router = express.Router()

router.get('/how', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'how.html'))
})

router.get('/questions', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'questions.html'))
})

router.get('*', (req, res, next) => next())

export default router
