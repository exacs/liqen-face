/**
 * Client Middleware
 */
const client = core => (req, res, next) => {
  req.core = core
  next()
}

export default client
