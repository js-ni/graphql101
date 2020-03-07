import 'core-js/stable'
import 'regenerator-runtime/runtime'
import express from 'express'
import 'dotenv/config'
import { ApolloServer, ApolloError } from 'apollo-server-express'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

const { PORT } = process.env;

(async () => {
  try {
    const app = express()

    const server = new ApolloServer({
      resolvers,
      typeDefs
    })

    server.applyMiddleware({
      app,
      path: '/jsni'
    })

    app.listen(PORT, () => {
      console.log(`App listening in http://localhost:${PORT}${server.graphqlPath}`)
    })
  } catch (e) {
    throw new ApolloError(e)
  }
})()
