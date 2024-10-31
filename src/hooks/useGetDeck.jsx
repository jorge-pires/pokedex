import { useState, useEffect } from "react";
import { homeCardData } from "../objects/home-card-data";

async function createDeck(offset = 0) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`);
    return await response.json();
}

async function createCards(url) {
    const response = await fetch(url);
    return await response.json();
}

export function useGetDeck() {

    const [offset, setOffset] = useState(0);

    const [deck, setDeck] = useState({
        cards: []
    })

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await createDeck()
                const links = await data.results.map((link) => {
                    return link.url
                })

                const pokemonsData = await Promise.all(links.map((url) => createCards(url)))

                const pokemons = homeCardData(pokemonsData)

                setDeck({
                    cards: pokemons
                })
            }
            catch (err) {
                console.log(err);
            }
        }

        fetchData()
    }, [])

    const load = async () => {

        const newOffset = offset + 10;

        try {
            const data = await createDeck(newOffset)
            const links = await data.results.map((link) => {
                return link.url
            })

            const newPokemonsData = await Promise.all(links.map((url) => createCards(url)))

            const newPokemons = homeCardData(newPokemonsData)

            setDeck({
                cards: [...deck.cards, ...newPokemons]
            })

            setOffset(newOffset)
        }
        catch (err) {
            console.log(err);
        }
    }

    return { deck, load }
}

