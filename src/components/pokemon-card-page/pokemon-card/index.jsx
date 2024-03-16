import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { ThemeContext } from '../../../contexts/theme-contexts'
import React, { useContext } from "react";
import { PokemonCardDescription } from '../pokemon-card-description'
import { useGetCard } from '../../../hooks/useGetCard'

export const PokemonCard = () => {

    const card = useGetCard()

    const { theme } = useContext(ThemeContext)

    return (
        <Div theme={theme}>
            <Header theme={theme} id='home'>
                <Link to='/'>Return to all pokémon</Link>
            </Header>
            {card.skills && (<Section theme={theme}>
                {card.description.length > 0 ? <PokemonCardDescription card={card} theme={theme}/> : "No Pokémon found, check your internet connection"}
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

    @media (max-width: 1024px) {
        width: 100%;
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

    @media (max-width: 1024px) {
        width: 100%;
    }
`