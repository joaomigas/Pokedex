const divPrincipal = document.querySelector('.pokemon-area');
const documentBody = document.querySelector('body');
const buttonTop = document.querySelector('.scroll-to-top');

function addPokemonToDOM(pokemon){
    let sectionPokemons= document.createElement('section');
    sectionPokemons.setAttribute('class', 'pokemon');
    sectionPokemons.setAttribute('data-pokemon-id', pokemon.id);
    function getPokemonTypes() {
        if (pokemon.types.length === 1) {
            return `<span class="power1 ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>`;
        } else {
            return `
                <span class="power1 ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>
                <span class="power2 ${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</span>
            `;
        }
    }
    sectionPokemons.innerHTML= `
    <img class="pokemon-image" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p class="pokemon-name">${pokemon.name}</p>
    <div class="pokemon-powers">
        ${getPokemonTypes()}
    </div>`
    divPrincipal.appendChild(sectionPokemons);
}



function openInfoPokemons(pokemon){
    let modalPokemon = document.createElement('div');
    modalPokemon.setAttribute('class', 'modal-pokemon');
    modalPokemon.innerHTML=`
    <div class="modal-area">
        <div class="pokemon-name-image">
            <p class="pokemon-name-modal">${pokemon.name}</p>
            <img class="img-pokemon-modal" src="${pokemon.sprites.front_default}">
        </div>
        <div class="info-pokemon">
            <p class="details-pokemon">abilitie 1: ${pokemon.abilities[0].ability.name}</p>
            <p class="details-pokemon">abilitie 2: ${pokemon.abilities[1].ability.name}</p>
            <p class="details-pokemon">base exp: ${pokemon.base_experience}</p>
            <p class="details-pokemon">height: ${pokemon.height} cm</p>
            <p class="details-pokemon">weight: ${pokemon.weight} lb</p>
            <span class="close-button">X</span>
        </div>
    </div>
    `
    documentBody.appendChild(modalPokemon)
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function closeModal(){
    let modal = document.querySelector('.modal-pokemon');
    modal.remove();
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
}
