import React, { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { ThemeContext } from '../contexts/ThemeContext'

function ToggleTheme() {
    const { toggleTheme, isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <button className='p-4' onClick={toggleTheme}>
            <div className=''><MdDarkMode /></div>
            <div className='hidden'><MdLightMode /></div>
        </button>
    )
}

export default ToggleTheme