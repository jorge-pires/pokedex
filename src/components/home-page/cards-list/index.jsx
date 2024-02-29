import styled from "styled-components"
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../contexts/theme-contexts'
import React, { useContext } from "react";

export const CardsList = (props) => {

    const { theme } = useContext(ThemeContext)

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