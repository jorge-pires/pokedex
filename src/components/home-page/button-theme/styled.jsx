import styled from "styled-components";

export const Theme = styled.button`
    position: absolute;
    top: 25px;
    left: 35px;
    
    background-color: ${props => props.theme.buttonBackground};
    font-size: 10px;
    padding: 8px;
    text-shadow: none;
    color: ${props => props.theme.buttonColor};
    cursor: pointer;

    @media (max-width: 1024px) {
        top: 10px;
        left: 10px;
    }
`