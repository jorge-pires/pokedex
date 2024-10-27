const homeCardData = (pokemonData) => {
    return pokemonData.map((data) => ({
      name: data.name,
      image: data.sprites.front_default,
      id: data.id,
    }));
  };
  
  export { homeCardData };