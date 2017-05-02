import Cookies from 'cookies'

export function checkSession (req, res) {
  const cookies = new Cookies(req, res)
  const userId = cookies.get('user_id')

  return req
    .core.users.show(userId)
}

export function login (req, res, next) {
  const cookies = new Cookies(req, res)

  return req
    .core.sessions.create({})
    .then(session => {
      cookies.set('unsigned', 'access_token', session.access_token)
      cookies.set('unsigned', 'user_id', session.user.id)

      return session.user
    })
}
