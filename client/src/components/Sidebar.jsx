import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import image from '../assets/CV-pic.jpg'
import { NavLink } from 'react-router-dom'

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
                        // backgroundColor: isHovered1 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered1 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                >
                    <NavLink to="#home" activeClassName="active">HOME</NavLink>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered2 ? theme.ui : ``,
                        // backgroundColor: isHovered2 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered2 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                >
                    <NavLink to="#about" activeClassName="active">ABOUT</NavLink>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered3 ? theme.ui : ``,
                        // backgroundColor: isHovered3 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered3 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                >
                    <NavLink to="#services" activeClassName="active">SERVICES</NavLink>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered4 ? theme.ui : ``,
                        // backgroundColor: isHovered4 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered4 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                >
                    <NavLink to="#skills" activeClassName="active">SKILLS</NavLink>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered5 ? theme.ui : ``,
                        // backgroundColor: isHovered5 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered5 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered5(true)}
                    onMouseLeave={() => setIsHovered5(false)}
                >
                    <NavLink to="#education" activeClassName="active">EDUCATION</NavLink>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered6 ? theme.ui : ``,
                        // backgroundColor: isHovered6 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered6 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered6(true)}
                    onMouseLeave={() => setIsHovered6(false)}
                >
                    <NavLink to="#experience" activeClassName="active">EXPERIENCE</NavLink>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered7 ? theme.ui : ``,
                        // backgroundColor: isHovered7 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered7 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered7(true)}
                    onMouseLeave={() => setIsHovered7(false)}
                >
                    <NavLink to="#work" activeClassName="active">WORK</NavLink>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered8 ? theme.ui : ``,
                        // backgroundColor: isHovered8 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered8 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered8(true)}
                    onMouseLeave={() => setIsHovered8(false)}
                >
                    <NavLink to="#blog" activeClassName="active">BLOG</NavLink>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: isHovered9 ? theme.ui : ``,
                        // backgroundColor: isHovered9 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered9 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered9(true)}
                    onMouseLeave={() => setIsHovered9(false)}
                >
                    <NavLink to="#contact" activeClassName="active">CONTACT</NavLink>
                </li>

            </ul>
            <p className="text-sm mt-4">&copy; Copyright 2023.</p>
            <p className="text-sm mb-10">All rights reserved.</p>
        </div>
    )
}

export default Sidebar