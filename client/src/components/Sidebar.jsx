import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import image from '../assets/Emmanuel-2.jpg'

function Sidebar() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='Sidebar p-10 fixed h-[100vh] md:ml-8 lg:ml-10 w-[300px] text-center overflow-y-scroll' style={{ background: theme.bgg, color: theme.syntax }}>
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
                <li className='text-sm mt-1 font-bold'>
                    <a href="http://">HOME</a>
                </li>
                <li className='text-sm mt-1 font-bold'>
                    <a href="http://">ABOUT</a>
                </li>
                <li className='text-sm mt-1 font-bold'>
                    <a href="http://">SERVICES</a>
                </li>
                <li className='text-sm mt-1 font-bold'>
                    <a href="http://">SKILLS</a>
                </li>
                <li className='text-sm mt-1 font-bold'>
                    <a href="http://">EDUCATION</a>
                </li>
                <li className='text-sm mt-1 font-bold'>
                    <a href="http://">EXPERIENCE</a>
                </li>
                <li className='text-sm mt-1 font-bold'>
                    <a href="http://">WORK</a>
                </li>
                <li className='text-sm mt-1 font-bold'>
                    <a href="http://">BLOG</a>
                </li>
                <li className='text-sm mt-1 font-bold'>
                    <a href="http://">CONTACT</a>
                </li>
            </ul>
            <p className="text-sm mt-4">&copy; Copyright 2023.</p>
            <p className="text-sm mb-10">All rights reserved.</p>
        </div>
    )
}

export default Sidebar