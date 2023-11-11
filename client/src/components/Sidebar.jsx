import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import image from '../assets/CV-pic.jpg'

function Sidebar() {

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    const [isHovered1, setIsHovered1] = useState(false)
    const [isHovered2, setIsHovered2] = useState(false)
    const [isHovered3, setIsHovered3] = useState(false)
    const [isHovered4, setIsHovered4] = useState(false)
    const [isHovered5, setIsHovered5] = useState(false)
    const [isHovered6, setIsHovered6] = useState(false)
    const [isHovered7, setIsHovered7] = useState(false)
    const [isHovered8, setIsHovered8] = useState(false)
    const [isHovered9, setIsHovered9] = useState(false)

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

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered1 ? theme.ui : ``,
                        background: isHovered1 ? theme.bg : ``,
                        fontSize: isHovered1 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                >
                    <a href="#home">HOME</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered2 ? theme.ui : ``,
                        background: isHovered2 ? theme.bg : ``,
                        fontSize: isHovered2 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                >
                    <a href="#about">ABOUT</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered3 ? theme.ui : ``,
                        background: isHovered3 ? theme.bg : ``,
                        fontSize: isHovered3 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                >
                    <a href="#services">SERVICES</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered4 ? theme.ui : ``,
                        background: isHovered4 ? theme.bg : ``,
                        fontSize: isHovered4 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                >
                    <a href="#skills">SKILLS</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered5 ? theme.ui : ``,
                        background: isHovered5 ? theme.bg : ``,
                        fontSize: isHovered5 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered5(true)}
                    onMouseLeave={() => setIsHovered5(false)}
                >
                    <a href="#education">EDUCATION</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered6 ? theme.ui : ``,
                        background: isHovered6 ? theme.bg : ``,
                        fontSize: isHovered6 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered6(true)}
                    onMouseLeave={() => setIsHovered6(false)}
                >
                    <a href="#experience">EXPERIENCE</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered7 ? theme.ui : ``,
                        background: isHovered7 ? theme.bg : ``,
                        fontSize: isHovered7 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered7(true)}
                    onMouseLeave={() => setIsHovered7(false)}
                >
                    <a href="#work">WORK</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered8 ? theme.ui : ``,
                        background: isHovered8 ? theme.bg : ``,
                        fontSize: isHovered8 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered8(true)}
                    onMouseLeave={() => setIsHovered8(false)}
                >
                    <a href="#blog">BLOG</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered9 ? theme.ui : ``,
                        background: isHovered9 ? theme.bg : ``,
                        fontSize: isHovered9 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered9(true)}
                    onMouseLeave={() => setIsHovered9(false)}
                >
                    <a href="#contact">CONTACT</a>
                </li>

            </ul>
            <p className="text-sm mt-4">&copy; Copyright 2023.</p>
            <p className="text-sm mb-10">All rights reserved.</p>
        </div>
    )
}

export default Sidebar