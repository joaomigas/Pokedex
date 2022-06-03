const pokemonsDiv = document.querySelector('.pokemon-area');
renderAllPokemons(pokemonsDiv);

function renderPokemon(div, pokemon) {
    console.log(pokemon);
    div.appendChild(`
        <div class="pokemon">
            <img src="${pokemon.img}">
            <div class="title">${pokemon.name}</div>
            <div class="abilities">${pokemon.abilities.map((ability) => '<div>${ability.name}</div>')}</div>
        </div>
    `);
}