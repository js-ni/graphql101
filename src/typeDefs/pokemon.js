import { gql } from 'apollo-server-express'

export default gql`
  type Pokemon {
    id: ID!
    name: String
    evolvesFrom: Pokemon
  }

  extend type Query {
    getPokemon (
      id: Int!
    ): Pokemon
  }
`
