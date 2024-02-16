import styled from "styled-components"
import { useState, useEffect } from "react";

async function createDeck() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10");
    return await response.json();
}

async function createCards(pokemons) {
    const response = await fetch(pokemons);
    return await response.json();
}


export const Home = () => {

    const [deck, setDeck] = useState({
        cards: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const data = await createDeck()
            const links = await data.results.map((link) => {
                return link.url
            })

            const pokemons = links.map(async(link) =>{
                const pokemon = await createCards(link) 
                return pokemon
            })

            console.log(pokemons)

            setDeck({
                cards: data.results
            })
        }
        fetchData()
    }, [])

    // console.log(deck)

    return (
        <Div>
            <header>
                <Theme href="/">Trocar tema</Theme>
                <h1>Escolha seu Pokémon favorito</h1>
            </header>
            <main>
                <section>
                    <ul>
                        {
                            deck.cards.map((card, index) => {
                                return (
                                    <li key={index}>
                                        <a href="/">
                                            <h3>{card.name}</h3>
                                            <img src={card.url} alt={card.name} />
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <Load href="/">Carregar mais</Load>
            </main>
            <footer>
                <Top href="/">home</Top>
            </footer>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    background-color: #de0528;
    text-shadow: 0.5px 0.5px 0px white;
    word-spacing: 0.1px;

    header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 50px;
        position: relative;
    }

    main {
        width: 100%;
        height: 100%;
        position: relative;
        padding: 0px 100px 125px 100px;
        // ajustar o padding-bottom
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    li {
        padding: 50px 50px;
        width: 260px;
    }

    h3 {
        margin-bottom: 10px;
    }

    footer {
        background-color: white;
        width: 100%;
        height: 125px;
        display: flex;
        justify-content: center;
        text-shadow: none;
        border-top: solid 25px black;
        position: fixed;
        bottom: 0;
    }
`

const Theme = styled.a`
    position: absolute;
    top: 25px;
    left: 35px;
    
    background-color: black;
    font-size: 7px;
    padding: 8px;
    text-shadow: none;
    color: white;
`

const Load = styled.a`
    position: absolute;
    bottom: 150px;
    right: 30px;
`

const Top = styled.a`
    width: 150px;
    height: 150px;
    border: 25px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-58%);
    background-color: white;
`
