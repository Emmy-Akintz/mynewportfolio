import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import image from '../assets/Emmanuel-2.jpg'

function Sidebar() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='Sidebar p-10 fixed h-[100vh] lg:ml-10 w-[300px] text-center overflow-y-scroll' style={{ background: theme.bgg, color: theme.syntax }}>
            <div className="image w-[200px] h-[200px] m-auto">
                <img src={image} alt="" />
            </div>
            <br />
            <h1 className='font-bold text-2xl'>Ayomide Akintan</h1>
            <p className="text-sm">
                <span className="" style={{ color: theme.ui }}>WEB DEVELOPER </span>
                IN NIGERIA
            </p>
            <ul className='mt-4'>
                <li className='text-sm mt-1'>HOME</li>
                <li className='text-sm mt-1'>ABOUT</li>
                <li className='text-sm mt-1'>SERVICES</li>
                <li className='text-sm mt-1'>SKILLS</li>
                <li className='text-sm mt-1'>EDUCATION</li>
                <li className='text-sm mt-1'>EXPERIENCE</li>
                <li className='text-sm mt-1'>WORK</li>
                <li className='text-sm mt-1'>BLOG</li>
                <li className='text-sm mt-1'>CONTACT</li>
            </ul>
            <p className="text-sm mt-4">&copy; Copyright 2023.</p>
            <p className="text-sm">All rights reserved.</p>
        </div>
    )
}

export default Sidebar