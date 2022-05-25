async function getAllPokemons(){
    let body= document.querySelector('body');
    let pokemonArea= document.createElement('div');
    pokemonArea.setAttribute('class', 'pokemon-area');
    body.appendChild(pokemonArea);

    for(i=1; i<=12; i++){
        let pokemons= await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`); 
        let arrayOfPokemons= await pokemons.json();

        let pokemon= document.createElement('section');
        pokemon.setAttribute('class', 'pokemon');
        pokemon.setAttribute('data-pokemon-id', i);
        pokemonArea.appendChild(pokemon);

        let pokemonImage= document.createElement('img');
        pokemonImage.setAttribute('class', 'pokemon-image');
        pokemonImage.setAttribute('data-pokemon-image', i);
        pokemonImage.src= arrayOfPokemons.sprites.front_default;
        pokemonImage.alt= arrayOfPokemons.species.name;
        pokemon.appendChild(pokemonImage);

        let pokemonName= document.createElement('p');
        pokemonName.setAttribute('class', 'pokemon-name');
        pokemonName.setAttribute('data-pokemon-name', i);
        pokemonName.innerText= arrayOfPokemons.species.name;
        pokemon.appendChild(pokemonName);

        let pokemonPowers= document.createElement('div');
        pokemonPowers.setAttribute('class', 'pokemon-powers');
        pokemon.appendChild(pokemonPowers);

        let power1= document.createElement('span');
        power1.setAttribute('class','power1');
        power1.innerText= arrayOfPokemons.types[0].type.name;
        pokemonPowers.appendChild(power1);

        if(arrayOfPokemons.types[1]){
            let power2= document.createElement('span');
            power2.setAttribute('class','power2');
            power2.innerText= arrayOfPokemons.types[1].type.name;
            pokemonPowers.appendChild(power2);
        }

        //DETAILS OF POKEMON FOR MODAL
        let abilitie1= document.createElement('p');
        abilitie1.setAttribute('data-abilitie-one', i);
        abilitie1.innerText= `abilitie 1: ${arrayOfPokemons.abilities[0].ability.name}`;
        abilitie1.style.display="none";
        body.appendChild(abilitie1);

        if(arrayOfPokemons.abilities[1]){
            let abilitie2= document.createElement('p');
            abilitie2.setAttribute('data-abilitie-two', i);
            abilitie2.innerText= `abilitie 2: ${arrayOfPokemons.abilities[1].ability.name}`;
            abilitie2.style.display="none";
            body.appendChild(abilitie2);
        }

        let baseExp= document.createElement('p');
        baseExp.setAttribute('data-exp', i);
        baseExp.innerText= `base exp: ${arrayOfPokemons.base_experience}`;
        baseExp.style.display="none";
        body.appendChild(baseExp);

        let heightPokemon= document.createElement('p');
        heightPokemon.setAttribute('data-height', i);
        heightPokemon.innerText= `height: ${arrayOfPokemons.height} cm`;
        heightPokemon.style.display="none";
        body.appendChild(heightPokemon);

        let weightPokemon= document.createElement('p');
        weightPokemon.setAttribute('data-weight', i);
        weightPokemon.innerText= `weight: ${arrayOfPokemons.weight} kg`;
        weightPokemon.style.display="none";
        body.appendChild(weightPokemon);
        //DETAILS OF POKEMON FOR MODAL END
        
        console.log(arrayOfPokemons);   
    }
}
getAllPokemons();




document.addEventListener('click', (e)=>{
    if(e.target.classList[0]==="close-button" || e.target.classList[0]==="modal-pokemon"){
    closeModal();
}
});

function closeModal(){
    const modalPokemon= document.querySelector('.modal-pokemon')
    modalPokemon.remove()
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
}


document.addEventListener('click', (e)=>{
    if(e.target.classList[0]==="pokemon"){
    let pokemon= e.target;
    let idPokemon= pokemon.getAttribute('data-pokemon-id');
    openInfoPokemons(idPokemon);
}
});

function openInfoPokemons(id){
    let body= document.querySelector('body');
    
    //CREATING MODAL
    let modalPokemon= document.createElement('div');
    modalPokemon.setAttribute('class', 'modal-pokemon');
    body.appendChild(modalPokemon);

    let modalArea= document.createElement('div');
    modalArea.setAttribute('class', 'modal-area');
    modalPokemon.appendChild(modalArea);
    //END OF CREATION MODAL
    
    //LEFT SIDE OF MODAL
    let pokemonNameImage= document.createElement('div');
    pokemonNameImage.setAttribute('class', 'pokemon-name-image');
    modalArea.appendChild(pokemonNameImage);

    let pokemonNameModal= document.createElement('p');
    pokemonNameModal.setAttribute('class', 'pokemon-name-modal');
    pokemonNameImage.appendChild(pokemonNameModal);
    pokemonNameModal.innerText= document.querySelector(`[data-pokemon-name="${id}"]`).innerText;

    let imgPokemonModal= document.createElement('img');
    imgPokemonModal.setAttribute('class', 'img-pokemon-modal');
    pokemonNameImage.appendChild(imgPokemonModal);
    imgPokemonModal.src=document.querySelector(`[data-pokemon-image="${id}"]`).src;
    //END LEFT SIDE OF MODAL

    //RIGHT SIDE OF MODAL
    let infoPokemon= document.createElement('div');
    infoPokemon.setAttribute('class', 'info-pokemon');
    modalArea.appendChild(infoPokemon);

    let abilitie1= document.createElement('p');
    abilitie1.setAttribute('class','details-pokemon');
    infoPokemon.appendChild(abilitie1);
    abilitie1.innerText= document.querySelector(`[data-abilitie-one="${id}"]`).innerText;

    let abilitie2= document.createElement('p');
    abilitie2.setAttribute('class','details-pokemon');
    infoPokemon.appendChild(abilitie2);
    abilitie2.innerText= document.querySelector(`[data-abilitie-two="${id}"]`).innerText;

    let baseExp= document.createElement('p');
    baseExp.setAttribute('class','details-pokemon');
    infoPokemon.appendChild(baseExp);
    baseExp.innerText= document.querySelector(`[data-exp="${id}"]`).innerText;

    let heightPokemon= document.createElement('p');
    heightPokemon.setAttribute('class','details-pokemon');
    infoPokemon.appendChild(heightPokemon);
    heightPokemon.innerText= document.querySelector(`[data-height="${id}"]`).innerText;

    let weightPokemon= document.createElement('p');
    weightPokemon.setAttribute('class','details-pokemon');
    infoPokemon.appendChild(weightPokemon);
    weightPokemon.innerText= document.querySelector(`[data-weight="${id}"]`).innerText;

    //END RIGHT SIDE OF MODAL

    let closeButton= document.createElement('span');
    closeButton.setAttribute('class', 'close-button');
    closeButton.innerText='X';
    infoPokemon.appendChild(closeButton);

    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}
