import { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { ThemeContext } from '../contexts/ThemeContextValue'

function ToggleTheme() {
  const { toggleTheme, isLightTheme } = useContext(ThemeContext)

  const changeTheme = () => {
    toggleTheme(!isLightTheme)
  }

  return (
    <button type="button" className="p-4" onClick={changeTheme} aria-label="Toggle theme">
      <div className={isLightTheme ? 'animate-pulse' : 'hidden'}>
        <MdDarkMode />
      </div>
      <div className={isLightTheme ? 'hidden' : 'animate-pulse'}>
        <MdLightMode />
      </div>
    </button>
  )
}

export default ToggleTheme
