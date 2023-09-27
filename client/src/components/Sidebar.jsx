import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function Sidebar() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='p-12 fixed bg-red-200 h-[100vh]'>
            Sidebar
        </div>
    )
}

export default Sidebar