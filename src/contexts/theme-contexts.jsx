import {createContext, useState} from 'react'

export const themes = {
    light: {
        color: '#000000',
        background: '#de0528',
        textShadow: '#ffffff',
        buttonColor: '#ffffff',
        buttonBackground:'#000000',
        descriptionBackground: '#ffffff',
    },
    dark: {
        color: '#ffffff',
        background: '#191919',
        textShadow: '#191919',
        buttonColor: '#000000',
        buttonBackground:'#FCD012',
        descriptionBackground: '#000000',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}