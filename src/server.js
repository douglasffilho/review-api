const { default: fastify } = require('fastify')
const process = require('process')
const app = require('.')

const server = fastify({
  logger: true,
  pluginTimeout: 10000
})

server.register(app)

const PORT = process.env.PORT
console.log(`will listen at ${PORT}`)

server.listen({ port: PORT ?? 8080, host: '0.0.0.0' }, (err) => {
  if (err) {
    server.log.error(err)
    throw err
  }
})
