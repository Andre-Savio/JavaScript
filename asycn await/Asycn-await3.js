const pokemonUrl = pokemonNumner => 
`https://pokeapi.co/api/v2/pokemon/${pokemonNumner}`

const get3Pokemon = async () => {
    const promisePokemon1 =  axios.get(pokemonUrl(1))
    const promisePokemon4 =  axios.get(pokemonUrl(4))
    const promisePokemon7 =  axios.get(pokemonUrl(7))

    const pokemons = await Promise.all([
        promisePokemon1, 
        promisePokemon4, 
        promisePokemon7
    ])

    console.log(pokemons)

}

get3Pokemon()