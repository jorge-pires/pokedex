import { useState, useEffect } from "react";

async function createDeck(array) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${array}`);
    return await response.json();
}

async function createCards(pokemons) {
    const response = await fetch(pokemons);
    return await response.json();
}

export function useGetDeck() {

    const [deck, setDeck] = useState({
        cards: []
    })

    const [filteredDeck, setFilteredDeck] = useState({
        cards: []
    })

    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const data = await createDeck(24)
            const links = await data.results.map((link) => {
                return link.url
            })
            
            const pokemons = await Promise.all(links.map((url) => createCards(url)))
    
            setDeck({
                cards: pokemons
            })
        }

        fetchData()

        setFilteredDeck({
            cards: null
        })

    }, [])

    const load = async () => {
        const data = await createDeck(0)
        const links = await data.results.map((link) => {
            return link.url
        })

        const newPokemons = await Promise.all(links.map((url) => createCards(url)))

        setDeck({
            cards: [...deck.cards, ...newPokemons]
        })

        setVisible(false)
    }

    const filterPokemons = (typePokemon) => {

        let pokemons = [];

        deck.cards.map(pokemon => {
            pokemon.types.filter(({type}) => {
                
                if (type.name !== typePokemon.name) {
                    return;
                }

                pokemons.push(pokemon)

            })

        })

        setFilteredDeck({
            cards: pokemons
        })
    }
    return { deck, load, visible, filteredDeck, filterPokemons, setFilteredDeck }
}

