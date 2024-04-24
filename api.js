let offset = 0; 
let loading = false; 

async function getLinksPokemon() {
    const pokemonsLink = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`);
    const pokemonsLinkJson = await pokemonsLink.json();
    offset += 12; 
    return pokemonsLinkJson.results;
}

async function allInfoPokemons() {
    if (!loading) {
        loading = true; 
        let links = await getLinksPokemon();
        for (const link of links) {
            let infoPokemons = await fetch(link.url);
            let infoPokemonsJson = await infoPokemons.json();
            addPokemonToDOM(infoPokemonsJson);
        }
        loading = false; 
    }
    
}

async function getPokemonInfo(id){
    let pokemon= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let pokemonJson= await pokemon.json();
    openInfoPokemons(pokemonJson);
}

allInfoPokemons();