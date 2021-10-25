const axios = require("axios")
const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)
const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`)
      return { ...pokemon }
    })
  )
exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData(["mew", "ditto", "squirtle"])
  createPage({
    path: `/pokemon`,
    component: require.resolve("./src/pages/pokemon0-list.js"),
    context: { allPokemon },
  })
}