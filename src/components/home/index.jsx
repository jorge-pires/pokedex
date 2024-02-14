import styled from "styled-components"
import { useState, useEffect } from "react";

async function createDeck() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    return await response.json();
}


export const Home = () => {

    const [deck, setDeck] = useState({
        cards: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const data = await createDeck()

            setDeck({
                cards: data
            })
        }
        fetchData()
    }, [])

    console.log(deck)

    return (
        <Div>
            <header>
                <Theme href="/">Trocar tema</Theme>
                <h1>Escolha seu Pokémon favorito</h1>
            </header>
            <main>
                <section>
                    <a href="/">
                        <h3>Gato</h3>
                        <img src="http://placekitten.com/200/300" alt="" />
                    </a>
                </section>
                <Load href="/">Carregar mais</Load>
            </main>
            <footer>
                <Top href="/">home</Top>
            </footer>
        </Div>
    )
}

// {
//     deck.cards.map((card, index) => {
//         return (
//             <li key={index}>
//                 <a href="/">
//                     <h3>{card.name}</h3>
//                     <img src="http://placekitten.com/200/300" alt="" />
//                 </a>
//             </li>
//         )
//     })
// }

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
        display: flex;
        align-items: center;
        position: relative;
        padding: 0px 100px 125px 100px;
        // ajustar o padding-bottom
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
