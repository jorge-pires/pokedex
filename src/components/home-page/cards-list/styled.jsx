import styled from "styled-components"

export const Pokemon = styled.li`
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