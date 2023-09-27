import React, { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { ThemeContext } from '../contexts/ThemeContext'

function ToggleTheme() {
    const { toggleTheme, isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    const changeTheme = () => {
        if ( isLightTheme ) {
            toggleTheme(false)
        } else {
            toggleTheme(true)
        }
    }
    return (
        <button className='p-4' onClick={changeTheme}>
            <div className={isLightTheme ? '' : 'hidden'}><MdDarkMode /></div>
            <div className={isLightTheme ? 'hidden' : ''}><MdLightMode /></div>
        </button>
    )
}

export default ToggleTheme