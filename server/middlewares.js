import Cookies from 'cookies'

export function checkSession (req, res, next) {
  const cookies = new Cookies(req, res)
  const userId = cookies.get('user_id')

  if (!userId) {
    return res.redirect('/login')
  }

  return req
    .core.users.show(userId)
    .then(user => {
      req.currentUser = user
      next()
    })
    .catch(() => res.redirect('/login'))
}

export function login (req, res, next) {
  if (!req.body) {
    return res.render('index')
  }

  const cookies = new Cookies(req, res)

  return req
    .core.sessions.create({
      email: req.body.email,
      password: req.body.password
    })
    .then(session => {
      cookies
        .set('access_token', session.access_token, {httpOnly: false})
        .set('user_id', session.user.id, {httpOnly: false})

      req.user = session.user
      next()
    })
    .catch(() => res.render('index'))
}

export const setLiqenCore = core => (req, res, next) => {
  const cookies = new Cookies(req, res)
  const accessToken = cookies.get('access_token')
  const options = {
    apiURI: process.env.LIQEN_API_URI
  }

  if (accessToken) {
    req.core = core(accessToken, options)
  } else {
    req.core = core('', options)
  }
  next()
}
