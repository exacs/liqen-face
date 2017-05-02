import Cookies from 'cookies'

/**
 * Client Middleware
 */
const client = core => (req, res, next) => {
  const cookies = new Cookies(req, res)
  const accessToken = cookies.get('access_token')

  if (accessToken) {
    req.core = core(accessToken)
  } else {
    req.core = core()
  }
  next()
}

export default client
