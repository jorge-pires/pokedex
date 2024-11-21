import { Div } from "./styled";

export const PokemonCardDescription = ({ card, theme }) => {

    return (
        <Div theme={theme}>
            <h2>{card.cardData.name}</h2>
            <img src={card.cardData.image} alt={card.cardData.name} />
            <ul>
                <h3>List of abilities:</h3>
                {card.cardData.descriptions.map((ability, index) =>
                (
                    <li key={index}>
                        <h4>{ability.name}:</h4>
                        <p>{ability.effect}</p>
                    </li>
                ))}
            </ul>
            <ul>
                <h3>List of moves:</h3>
                {card.cardData.moves.map((move, index) => (
                    <li key={index}>
                        <p>{move.move}</p>
                    </li>
                ))}
            </ul>
            <ul>
                <h3>Types:</h3>
                {card.cardData.types.map((type, index) => (
                    <li key={index}>
                        <p>{type.type}</p>
                    </li>
                ))}
            </ul>
        </Div>
    )
}