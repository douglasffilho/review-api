module.exports = (api, _opts, done) => {
  api.register(require('./health'))
  api.register(require('./v1/reviews'))
  done()
}
