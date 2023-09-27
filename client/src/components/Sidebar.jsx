import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function Sidebar() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='p-10 fixed h-[100vh] lg:ml-10 w-[300px] text-center' style={{ background: theme.bgg, color: theme.syntax }}>
            Sidebar
        </div>
    )
}

export default Sidebar