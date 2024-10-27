import styled from "styled-components"
import { ThemeContext } from '../../../contexts/theme-contexts'
import React, { useContext, useState } from "react";
import { ButtonTheme } from '../button-theme'
import { CardsList } from '../cards-list'
import { ButtonFilter } from "../button-filter";
import { useFilter } from "../../../hooks/useFilter";
import { useGetDeck } from '../../../hooks/useGetDeck'

export const Home = () => {

    const { deck, load } = useGetDeck()

    const { filteredDeck, setFilteredDeck, filterDeck } = useFilter()

    const { theme } = useContext(ThemeContext)

    const [ visible, setVisible ] = useState(true)

    const handleSelectChange = (event) => {
        const value = event.target.value

        if (value === 'Filter Types') {
            setFilteredDeck({
                cards: null
            }) 

            setVisible(true)

            return
        }

        filterDeck(value)
        setVisible(false)
    }
    
    return (
        <Div theme={theme}>
            <header id="home">
                <ButtonTheme />
                <h1>Select your favorite Pokémon</h1>
                <ButtonFilter theme={theme} handleSelect={handleSelectChange} />
            </header>
            <main>
                <section>
                    {deck.cards ? <CardsList cards={filteredDeck.cards === null ? deck.cards : filteredDeck.cards} theme={theme} /> : "No Pokémon found, check your internet connection"}
                </section>
            </main>
            <footer>
                <ButtonTop href="#home">home</ButtonTop>
                <ButtonLoad theme={theme} onClick={load} isVisible={visible}>
                    Load more
                </ButtonLoad>
            </footer>
        </Div>
    )
}

const Div = styled.div`
    min-height: 100vh;
    overflow: hidden;
    background-color: ${props => props.theme.background};
    text-shadow: 0.5px 0.5px 0px ${props => props.theme.textShadow};
    color: ${props => props.theme.color};

    header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 70px;
        position: relative;
    }

    h1 {
        font-size: 25px;
    }

    main {
        width: 100%;
        padding: 0px 80px 120px 80px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    li {
        padding: 30px 50px;
    }

    footer {
        background-color: white;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        border-top: solid 15px black;
        position: fixed;
        bottom: 0;
        text-shadow: none;
    }

    @media (max-width: 821px) {
        h1 {
            font-size: 20px;
            line-height: 25px;
            text-align: center;
        }
    }
`

const ButtonLoad = styled.button`
    position: absolute;
    bottom: 95px;
    right: 35px;
    
    background-color: ${props => props.theme.buttonBackground};
    font-size: 10px;
    padding: 8px;
    color: ${props => props.theme.buttonColor};
    cursor: pointer;
    visibility: ${({isVisible}) => (isVisible ? 'visible' : 'hidden')};

    @media (max-width: 1024px) {
        bottom: 83px;
        right: 12px;
    }

    @media (max-width: 415px) {
        width: 60px;
        line-height: 16px;
    }
`

const ButtonTop = styled.a`
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
`
