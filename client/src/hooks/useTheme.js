import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContextValue'

export function useTheme() {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark

  return { isLightTheme, theme, toggleTheme }
}
