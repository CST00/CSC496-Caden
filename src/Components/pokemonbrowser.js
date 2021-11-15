import React from "react"
import Layout from "./layout"
export default function AllPokemon({ pageContext: { allPokemon } }) {
  return (
    <Layout>
    
      <ul>
        {allPokemon.map(pokemon => (
          <li key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p><button>
              Previous
              </button>
              {pokemon.name}
              <button >
                Next
              </button>
              </p>
          </li>
        ))}
        
      </ul>
      
    </Layout>
  )
}