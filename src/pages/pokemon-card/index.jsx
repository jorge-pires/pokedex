import { Link } from 'react-router-dom'
import { Div, Section, Header, Footer } from './styled';
import { ThemeContext } from '../../contexts/theme-contexts'
import React, { useContext } from "react";
import { PokemonCardDescription } from '../../components/pokemon-card-page/pokemon-card-description'
import { useGetCard } from '../../hooks/useGetCard'

export const PokemonCard = () => {

    const card = useGetCard()

    const { theme } = useContext(ThemeContext)

    return (
        <Div theme={theme}>
            <Header theme={theme} id='home'>
                <Link to='/'>Return to all pokémon</Link>
            </Header>
            {card.cardData.name && (<Section theme={theme}>
                {card.cardData.name !== null ? <PokemonCardDescription card={card} theme={theme}/> : "No Pokémon found, check your internet connection"}
                <Footer>
                    <a href="#home">home</a>
                </Footer>
            </Section>)}
        </Div>
    )
}