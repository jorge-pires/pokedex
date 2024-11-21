import styled from "styled-components"

export const Div = styled.div`
    min-height: 100vh;
    overflow: hidden;
    background-color: ${props => props.theme.background};
    text-shadow: 0.5px 0.5px 0px ${props => props.theme.textShadow};
    color: ${props => props.theme.color};

    header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 70px;
        position: relative;
    }

    h1 {
        font-size: 25px;
    }

    main {
        width: 100%;
        padding: 0px 80px 120px 80px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    li {
        padding: 30px 50px;
    }

    footer {
        background-color: white;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        border-top: solid 15px black;
        position: fixed;
        bottom: 0;
        text-shadow: none;
    }

    @media (max-width: 821px) {
        h1 {
            font-size: 20px;
            line-height: 25px;
            text-align: center;
        }
    }
`

export const ButtonLoad = styled.button`
    position: absolute;
    bottom: 95px;
    right: 35px;
    
    background-color: ${props => props.theme.buttonBackground};
    font-size: 10px;
    padding: 8px;
    color: ${props => props.theme.buttonColor};
    cursor: pointer;
    visibility: ${({isVisible}) => (isVisible ? 'visible' : 'hidden')};

    @media (max-width: 1024px) {
        bottom: 83px;
        right: 12px;
    }

    @media (max-width: 415px) {
        width: 60px;
        line-height: 16px;
    }
`

export const ButtonTop = styled.a`
    width: 100px;
    height: 100px;
    border: 15px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-58%);
    background-color: white;
    font-size: 12px;
`