async function getAllPokemons(){
    let body= document.querySelector('body');
    let pokemonArea= document.createElement('div');
    pokemonArea.setAttribute('class', 'pokemon-area');
    body.appendChild(pokemonArea);

    for(i=1; i<=100; i++){
        let pokemons= await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`); 
        let arrayOfPokemons= await pokemons.json();

        let pokemon= document.createElement('section');
        pokemon.setAttribute('class', 'pokemon');
        pokemonArea.appendChild(pokemon);

        let pokemonImage= document.createElement('img');
        pokemonImage.setAttribute('class', 'pokemon-image');
        pokemonImage.src= arrayOfPokemons.sprites.front_default;
        pokemon.appendChild(pokemonImage);

        let pokemonName= document.createElement('p');
        pokemonName.setAttribute('class', 'pokemon-name');
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
        console.log(arrayOfPokemons);
    }
}

getAllPokemons();