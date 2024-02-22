import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

async function getCard(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return await response.json()
}

export const PokemonCard = () => {
    
    const [card, setCard] = useState({})

    console.log(card)

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const card = await getCard(id)
            setCard(card)
        }
        fetchData()
    }, [])

    return (
        <section>
            <Link to='/'>Voltar para todos os pokémons</Link>
            <div>
                <img src={card.sprites.front_default} alt={card.name} />
                <h3>{card.name}</h3>
                <p>{card.types[0].type.name}</p>
            </div>
        </section>
    )
}