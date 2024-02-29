import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { ThemeContext } from '../../../contexts/theme-contexts'
import React, { useContext } from "react";
import { PokemonCardDescription } from '../pokemon-card-description'

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

    const { theme } = useContext(ThemeContext)

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
        <Div theme={theme}>
            <Header theme={theme} id='home'>
                <Link to='/'>Return to all pokémon</Link>
            </Header>
            {card.skills && (<Section theme={theme}>
                {card.description.length > 0 ? <PokemonCardDescription card={card} /> : "No Pokémon found, check your internet connection"}
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
    background-color: ${props => props.theme.background};
    text-shadow: 0.5px 0.5px 0px ${props => props.theme.textShadow};
    color: ${props => props.theme.color};

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
                background-color: ${props => props.theme.descriptionBackground};
                padding: 8px;
                text-shadow: none;
                color: ${props => props.theme.color};
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
        
        background-color: ${props => props.theme.buttonBackground};
        font-size: 10px;
        padding: 8px;
        text-shadow: none;
        color: ${props => props.theme.buttonColor};
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