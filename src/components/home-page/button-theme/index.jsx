import { Theme } from "./styled";
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