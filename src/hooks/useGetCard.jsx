import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cardData } from '../objects/pokemon-card-data'

async function getCard(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return await response.json()
}

const getAbilitiesDescription = async (api) => {
    const response = await fetch(api)
    return await response.json()
}

export const useGetCard = () => {

    const [card, setCard] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const pokemonCard = await getCard(id)

            cardData.setData(pokemonCard)

            const abilitiesLinks = await pokemonCard.abilities.map((link) => {
                return link.ability.url
            })
            const abilitiesDescription = await Promise.all(abilitiesLinks.map((api) => getAbilitiesDescription(api)))

            cardData.setDescription(abilitiesDescription)

            console.log(card)

            setCard({
                cardData
            })
        }
        fetchData()
    }, [])

    return card
}