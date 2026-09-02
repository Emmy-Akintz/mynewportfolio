import { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContextValue'

function ThemeContextProvider({ children }) {
  const [themeState, setThemeState] = useState({
    isLightTheme: true,
    light: { syntax: '#333333', ui: '#30d5c8', bg: '#ffffff', bgg: '#f5f5f5' },
    dark: { syntax: '#d3d3d3', ui: '#50c878', bg: '#121212', bgg: '#1e1e1e' },
  })

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setThemeState((previous) => ({
      ...previous,
      isLightTheme: !isDark,
    }))
  }, [])

  const toggleTheme = (isLightTheme) => {
    setThemeState((previous) => ({
      ...previous,
      isLightTheme,
    }))
  }

  return (
    <ThemeContext.Provider value={{ ...themeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
