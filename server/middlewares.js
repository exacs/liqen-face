import Cookies from 'cookies'

export function checkSession (req, res, next) {
  const cookies = new Cookies(req, res)
  const userId = cookies.get('user_id')

  if (!userId) {
    return res.redirect('/login')
  }

  console.log('Calling core.users.show')
  return req
    .core.users.show(userId)
    .then(user => {
      console.log('Call success. Showing user: ', user)
      req.currentUser = user
      next()
    })
    .catch((e) => {
      console.log('Call failed. Showing error: ', e)
      res.redirect('/login')
    })
}

export function login (req, res, next) {
  if (!req.body) {
    return res.render('index')
  }

  const cookies = new Cookies(req, res)

  console.log('Calling core.sessions.create')
  return req
    .core.sessions.create({
      email: req.body.email,
      password: req.body.password
    })
    .then(session => {
      console.log('Call success. Session returned')
      cookies
        .set('access_token', session.access_token, {httpOnly: false})
        .set('user_id', session.user.id, {httpOnly: false})

      req.user = session.user
      next()
    })
    .catch((e) => {
      console.log('Call failed. Showing error: ', e)
      res.render('index')
    })
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
