import styled from "styled-components";
import { ThemeContext, themes } from '../../../contexts/theme-contexts';
import React, {useContext} from "react";

export const ButtonTheme = () => {

    const {theme, setTheme} = useContext (ThemeContext)

    return(
        <Theme onClick={() => {setTheme(theme === themes.light ? themes.dark : themes.light)}}
        theme={theme}>
            Change theme
        </Theme>
    )
}

const Theme = styled.button`
    position: absolute;
    top: 25px;
    left: 35px;
    
    background-color: ${props => props.theme.buttonBackground};
    font-size: 10px;
    padding: 8px;
    text-shadow: none;
    color: ${props => props.theme.buttonColor};
    cursor: pointer;
`