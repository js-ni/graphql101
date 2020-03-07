import axios from 'axios'

export default {
  Query: {
    hola: () => {
      return 'hola'
    },
    getPokemon: async (root, { id }, context, info) => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      return data
    }
  },
  Pokemon: {
    evolvesFrom: async (root, args, context, info) => {
      const { data } = await axios.get(root.evolves_from_species.url)

      return data
    }
  }
}
