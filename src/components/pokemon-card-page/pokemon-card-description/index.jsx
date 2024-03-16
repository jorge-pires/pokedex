import styled from "styled-components"

export const PokemonCardDescription = ({ card, theme }) => {

    return (
        <Div theme={theme}>
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
        </Div>
    )
}

const Div = styled.div`
    img{
        width: 200px;
    }

    ul{
        padding: 30px 0;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;

        h3{
            margin-bottom: 50px;
            width: 100%;
        }

        li{
            margin-bottom: 30px;
            margin-left: 30px;

            h4{
                margin-bottom: 20px;
            }

            p{
                background-color: ${props => props.theme.descriptionBackground};
                padding: 8px;
                text-shadow: none;
                color: ${props => props.theme.color};
                font-size: 12px;
                line-height: 20px;
                padding: 15px;
            }
        }
    }

    @media (max-width: 415px) {

        h3 {
            line-height: 25px;
        }

        ul{
            li{
                margin-bottom: 30px;
                margin-left: 0px;
                width: 100%;

                p{
                    text-align: center;
                }
            }
        }
    }
`