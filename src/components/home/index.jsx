import styled, {css} from "styled-components"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

async function createDeck(array) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${array}`);
    return await response.json();
}

async function createCards(pokemons) {
    const response = await fetch(pokemons);
    return await response.json();
}

const CardsList = (props) => {
    return (
        <ul>
            {
                props.cards.map((card, index) => {
                    return (
                        <Pokemon key={index}>
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

    const [invisible, setInvisible] = useState(false)

    const [deck, setDeck] = useState({
        cards: []
    })

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

        setInvisible(true)
    }

    return (
        <Div>
            <header id="home">
                <Theme href="/">Change theme</Theme>
                <h1>Select your favorite Pokémon</h1>
            </header>
            <main>
                <section>
                    {deck.cards.length > 0 ? <CardsList cards={deck.cards} /> : "No Pokémon found"}
                </section>
            </main>
            <footer>
                <Top href="#home">home</Top>
                <Load onClick={load} isInvisible={invisible}>Load more</Load>
            </footer>
        </Div>
    )
}

const Div = styled.div`
    min-height: 100vh;
    overflow: hidden;

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

const Theme = styled.a`
    position: absolute;
    top: 25px;
    left: 35px;
    
    background-color: black;
    font-size: 10px;
    padding: 8px;
    text-shadow: none;
    color: white;
`
const Pokemon = styled.li`
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 142px;
        font-size: 12px;
    }

    img{
        width: 130px;
    }
`

let Load = styled.button`
    position: absolute;
    bottom: 95px;
    right: 35px;
    background-color: black;
    font-size: 10px;
    padding: 8px;
    color: white;
    cursor: pointer;
    visibility: ${({ isInvisible }) => (isInvisible ? 'visible' : 'hidden')};
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
