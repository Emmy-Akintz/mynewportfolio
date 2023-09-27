import React, { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { ThemeContext } from '../contexts/ThemeContext'

function ToggleTheme() {
    const {
        toggleTheme
        // isLightTheme,
        // light,
        // dark
    } = useContext(ThemeContext)
    // const theme = isLightTheme ? light : dark
    return (
        <button className='' onClick={toggleTheme}>
            <div className=""><MdDarkMode /></div>
            <div className=""><MdLightMode /></div>
        </button>
    )
}

export default ToggleTheme