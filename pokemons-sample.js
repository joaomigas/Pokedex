async function getMorePokemons(offset, limit) {
    const allPokemons= await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=12/`);
    const allPokemonsJson= await allPokemons.json();

    return allPokemonsJson;
}

async function getPokemon(pokemonUrl) {
    let result = await fetch(pokemonUrl);
    let pokemon = await result.json()
    return pokemon;
}

async function renderAllPokemons(pokemonsDiv) {
    const { results: pokemons } = await getMorePokemons();
    pokemons.map((pokemon) => renderPokemon(pokemonsDiv, pokemon));
}


