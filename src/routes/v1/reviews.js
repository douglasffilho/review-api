const reviews = require('../../controllers/reviews')
const schema = require('../../schemas/v1/reviews')

module.exports = (api, _opts, done) => {
  const opts = {
    schema,
    handler: reviews.getReviews
  }
  api.get('/reviews/:sku', opts)

  done()
}
