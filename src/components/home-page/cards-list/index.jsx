import { Link } from 'react-router-dom'
import { Pokemon } from "./styled";

export const CardsList = ({ cards, theme }) => {
    return (
        <ul>
            {
                cards.map((card, index) => {
                    return (
                        <Pokemon Load theme={theme} key={index}>
                            <Link to={`/pokemon/${card.id}`}>
                                <h3>{card.name}</h3>
                                <img src={card.image} alt={card.name} />
                            </Link>
                        </Pokemon>
                    )
                })
            }
        </ul>
    )
}