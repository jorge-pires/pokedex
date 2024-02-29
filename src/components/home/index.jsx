import styled from "styled-components"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/theme-contexts'
import React, {useContext} from "react";
import { ButtonTheme } from '../button-theme'

async function createDeck(array) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${array}`);
    return await response.json();
}

async function createCards(pokemons) {
    const response = await fetch(pokemons);
    return await response.json();
}

const CardsList = (props) => {

    const {theme} = useContext (ThemeContext)

    return (
        <ul>
            {
                props.cards.map((card, index) => {
                    return (
                        <Pokemon Load theme={theme} key={index}>
                            <Link to={`/pokemon/${card.id}`}>
                                <h3>{card.name}</h3>
                                <img src={card.sprites.front_default} alt={card.name} />
                            </Link>
                        </Pokemon>
                    )
                })
            }
        </ul>
    )
}

export const Home = () => {

    const [visible, setVisible] = useState(true)

    const [deck, setDeck] = useState({
        cards: []
    })

    const {theme} = useContext (ThemeContext)

    useEffect(() => {
        const fetchData = async () => {
            const data = await createDeck(24)
            const links = await data.results.map((link) => {
                return link.url
            })

            // Promise.all([array de promises que quero o retorno])
            const pokemons = await Promise.all(links.map((url) => createCards(url)))

            // console.log(pokemons)

            setDeck({
                cards: pokemons
            })
        }
        fetchData()
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

    return (
        <Div theme={theme}>
            <header id="home">
                <ButtonTheme />
                <h1>Select your favorite Pokémon</h1>
            </header>
            <main>
                <section>
                    {deck.cards.length > 0 ? <CardsList cards={deck.cards} /> : "No Pokémon found"}
                </section>
            </main>
            <footer>
                <Top href="#home">home</Top>
                <Load theme={theme} onClick={load} isVisible={visible}>Load more</Load>
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
        width: 100vw;
        padding: 70px;
        position: relative;
    }

    h1 {
        font-size: 25px;
    }

    main {
        width: 100vw;
        padding: 0px 80px 120px 80px;
        // ajustar o padding-bottom
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
        width: 100vw;
        height: 70px;
        display: flex;
        justify-content: center;
        border-top: solid 15px black;
        position: fixed;
        bottom: 0;
        text-shadow: none;
    }
`

const Pokemon = styled.li`
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 142px;
        font-size: 12px;
        color: ${props => props.theme.color};
    }

    img{
        width: 130px;
    }
`

const Load = styled.button`
    position: absolute;
    bottom: 95px;
    right: 35px;
    background-color: ${props => props.theme.buttonBackground};
    font-size: 10px;
    padding: 8px;
    color: ${props => props.theme.buttonColor};
    cursor: pointer;
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`

const Top = styled.a`
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
