import React from "react";

export const PokemonCardDescription = ({ card }) => {
    return (
        <>
            <h2>{card.skills.name}</h2>
            <img src={card.skills.sprites.front_default} alt={card.skills.name} />
            <ul>
                <h3>List of abilities:</h3>
                {card.description.map((ability, index) =>
                (
                    <li key={index}>
                        <h4>{ability.name}:</h4>
                        <p>{ability.effect_entries[1].effect}</p>
                    </li>
                ))}
            </ul>
            <ul>
                <h3>List of moves:</h3>
                {card.skills.moves.map((move, index) => (
                    <li key={index}>
                        <p>{move.move.name}</p>
                    </li>
                ))}
            </ul>
            <ul>
                <h3>Types:</h3>
                {card.skills.types.map((type, index) => (
                    <li key={index}>
                        <p>{type.type.name}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}