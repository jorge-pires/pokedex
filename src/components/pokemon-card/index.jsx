import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from "styled-components"

async function getCard(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return await response.json()
}

const getAbilitiesDescription = async (api) => {
    const response = await fetch(api)
    return await response.json()
}

export const PokemonCard = () => {

    const [card, setCard] = useState({ skills: '', description: '' })

    // console.log(card)

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

    return (
        <Div>
            <Header id='home'>
                <Link to='/'>Return to all pokémon</Link>
            </Header>
            {card.skills && (<Section>
                <h2>{card.skills.name}</h2>
                <img src={card.skills.sprites.front_default} alt={card.skills.name} />
                <ul>
                    <h3>List of abilities:</h3>
                    {card.description.map((ability, index) =>
                    (
                        <li key={index}>
                            <h4>{ability.name}:</h4>
                            <p>{ability.effect_entries[1].effect}</p>
                        </li>
                    ))}
                </ul>
                <ul>
                    <h3>List of moves:</h3>
                    {card.skills.moves.map((move, index) => (
                        <li key={index}>
                            <p>{move.move.name}</p>
                        </li>
                    ))}
                </ul>
                <ul>
                    <h3>Types:</h3>
                    {card.skills.types.map((type, index) => (
                        <li key={index}>
                            <p>{type.type.name}</p> 
                        </li>
                    ))}
                </ul>
                <Footer>
                    <a href="#home">home</a>
                </Footer>
            </Section>)}
        </Div>
    )
}

const Div = styled.div`
    min-height: 100vh;
`

const Section = styled.section`
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 120px 70px;

    img{
        max-width: 200px;
    }

    ul{
        padding: 30px 0;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;

        h3{
            margin-bottom: 50px;
            width: 100%;
        }

        li{
            margin-bottom: 30px;
            margin-left: 30px;

            h4{
                margin-bottom: 20px;
            }

            p{
                background-color: white;
                padding: 8px;
                text-shadow: none;
                color: black;
                font-size: 12px;
                line-height: 20px;
                padding: 15px;
            }
        }
    }
`

const Header = styled.header`
    width: 100%;
    position: relative;
    
    a{
        position: absolute;
        top: 25px;
        left: 35px;
        
        background-color: black;
        font-size: 10px;
        padding: 8px;
        text-shadow: none;
        color: white;
    }
`

const Footer = styled.footer`
    background-color: white;
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: center;
    border-top: solid 15px black;
    position: fixed;
    bottom: 0;
    left: 0;
    text-shadow: none;

    a{
        width: 100px;
        height: 100px;
        border: 15px solid black;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateY(-58%);
        background-color: white;
        font-size: 12px;
    }
`