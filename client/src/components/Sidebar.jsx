import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import image from '../assets/Emmanuel-2.jpg'

function Sidebar() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='Sidebar p-10 fixed h-[100vh] lg:ml-10 w-[300px] text-center' style={{ background: theme.bgg, color: theme.syntax }}>
            <div className="image w-[200px] h-[200px] m-auto">
                <img src={image} alt="" />
            </div>
            <br />
            <h1 className='font-bold text-2xl'>Ayomide Akintan</h1>
            <p className="">
                <span className="" style={{ color: theme.ui }}>WEB DEVELOPER </span>
                IN NIGERIA
            </p>
        </div>
    )
}

export default Sidebar