/**
 * Fake API Client
 */

const localLiqen = token => ({
  users: {
    show (id) {
      if (token === 'valid_token' && id === 1) {
        return Promise.resolve()
      } else {
        return Promise.reject(new Error('Not logged in'))
      }
    }
  }
})

export default localLiqen
