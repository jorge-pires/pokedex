import { useState } from "react";
import { homeCardData } from "../objects/home-card-data";

async function createDeck(pokemonType) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${pokemonType}`);
    return await response.json();
}

async function createCards(url) {
    const response = await fetch(url);
    return await response.json();
}

export function useFilter() {

    const [filteredDeck, setFilteredDeck] = useState({
        cards: null
    })

    const filterDeck = async (pokemonType) => {
        const data = await createDeck(pokemonType)

        const links = await data.pokemon.map((link) => {
            return link.pokemon.url
        })

        const pokemonsData = await Promise.all(links.map((url) => createCards(url)))

        const pokemons = homeCardData(pokemonsData)

        setFilteredDeck({
            cards: pokemons
        })
    }

    return { filteredDeck, setFilteredDeck, filterDeck }
}

