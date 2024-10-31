const cardData = {
  setData(pokemonCard) {
    const moves = pokemonCard.moves.map(data => ({
      move: data.move.name
    }))
    const types = pokemonCard.types.map(data => ({
      type: data.type.name
    }))
    this.name = pokemonCard.name
    this.image = pokemonCard.sprites.front_default
    this.types = types
    this.moves = moves
  },
  setDescription(abilitiesDescription) {
    const description = abilitiesDescription.map(data => ({
      name: data.name,
      effect: data.effect_entries[1].effect,
    }))
    this.descriptions = description
  },
}

export { cardData }