import { ThemeContext } from '../../contexts/theme-contexts'
import React, { useContext, useState } from "react";
import { ButtonTheme } from '../../components/home-page/button-theme'
import { CardsList } from '../../components/home-page/cards-list'
import { ButtonFilter } from "../../components/home-page/button-filter";
import { useFilter } from "../../hooks/useFilter";
import { useGetDeck } from '../../hooks/useGetDeck'
import { Div, ButtonLoad, ButtonTop } from './styled'

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
                    {deck.cards ? <CardsList cards={filteredDeck.cards === null ? deck.cards : filteredDeck.cards} theme={theme} /> : "No Pokémons found, check your internet connection"}
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