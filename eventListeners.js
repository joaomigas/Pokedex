document.addEventListener('click', (e)=>{
    if(e.target.classList[0]==="pokemon"){
    let pokemon= e.target;
    let idPokemon= pokemon.getAttribute('data-pokemon-id');
    getPokemonInfo(idPokemon);
}
});

document.addEventListener('click', (e)=>{
    if(e.target.classList[0] === "close-button" || e.target.classList[0] === "modal-pokemon"){
    closeModal();
}
});

document.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        allInfoPokemons();
    }
});
