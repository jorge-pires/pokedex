import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

async function getCard(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return await response.json()
}

const getAbilitiesDescription = async (api) => {
    const response = await fetch(api)
    return await response.json()
}

export const useGetCard = () => {

    const [card, setCard] = useState({ skills: '', description: '' })

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const resultCard = await getCard(id)

            const abilitiesLinks = await resultCard.abilities.map((link) => {
                return link.ability.url
            })
            const abilitiesDescription = await Promise.all(abilitiesLinks.map((api) => getAbilitiesDescription(api)))

            setCard({ skills: resultCard, description: abilitiesDescription })
        }
        fetchData()
    }, [])

    return card
}