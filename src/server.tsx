import fastify from 'fastify'
import mercurius from 'mercurius'
import { buildSchema } from 'type-graphql'
import UserResolver from './modules/user.resolver'

// const PORT: number = Number(process.env.PORT) | 5000
const main = async () => {

  const server = fastify({
    ignoreTrailingSlash: true
  })

  server.get('/', (req, res) => {
    res.send({
      message: "Hello world"
    })
  })

  server.register(mercurius, {
    schema: await buildSchema({
      resolvers: [
        UserResolver
      ]
    }),
    graphiql: 'playground',
    jit: 1,
    cache: true
  })

  server.listen(process.env.PORT || 5000, '0.0.0.0', (err, address) => {
    if (err) throw err
    console.log(`Server is listening on ${address}`)
  })
}

main()