import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
    const [lightTheme, setLightTheme] = useState({
        isLightTheme: true,
        light: { syntax: '#333333', ui: '#30d5c8', bg: '#ffffff', bgg: '#f5f5f5' },
        dark: { syntax: '#d3d3d3', ui: '#50c878', bg: '#121212', bgg: '#1e1e1e' }
    })

    // detect default theme
    useEffect(() => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setLightTheme(previousTheme => ({
            ...previousTheme,
            isLightTheme: !isDark // change to dark if that's the user's preference
        }))
    }, [])

    const toggleTheme = (isLightTheme) => {
        setLightTheme(previousTheme => {
            return {
                ...previousTheme,
                isLightTheme: isLightTheme
            }
        })
    }
    
    return (
        <ThemeContext.Provider value={{ ...lightTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;