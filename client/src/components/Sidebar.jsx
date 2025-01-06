import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import image from '../assets/CV-pic.jpg'
import { NavLink } from 'react-router-dom'

function Sidebar(props) {

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
                <span className="" style={{ color: theme.ui }}>SOFTWARE ENGINEER </span>
                IN NIGERIA
            </p>
            <ul className='mt-4'>
                
                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: props.activeSection === 'home' && theme.ui,
                        // backgroundColor: isHovered1 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered1 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                >
                    <a href="#home" activeClassName="active">HOME</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: props.activeSection === 'about' && theme.ui,
                        // backgroundColor: isHovered2 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered2 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                >
                    <a href="#about" activeClassName="active">ABOUT</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: props.activeSection === 'services' && theme.ui,
                        // backgroundColor: isHovered3 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered3 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                >
                    <a href="#services" activeClassName="active">SERVICES</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: props.activeSection === 'skills' && theme.ui,
                        // backgroundColor: isHovered4 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered4 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                >
                    <a href="#skills" activeClassName="active">SKILLS</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: props.activeSection === 'education' && theme.ui,
                        // backgroundColor: isHovered5 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered5 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered5(true)}
                    onMouseLeave={() => setIsHovered5(false)}
                >
                    <a href="#education" activeClassName="active">EDUCATION</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: props.activeSection === 'experience' && theme.ui,
                        // backgroundColor: isHovered6 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered6 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered6(true)}
                    onMouseLeave={() => setIsHovered6(false)}
                >
                    <a href="#experience" activeClassName="active">EXPERIENCE</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: props.activeSection === 'work' && theme.ui,
                        // backgroundColor: isHovered7 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered7 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered7(true)}
                    onMouseLeave={() => setIsHovered7(false)}
                >
                    <a href="#work" activeClassName="active">WORK</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: props.activeSection === 'blog' && theme.ui,
                        // backgroundColor: isHovered8 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered8 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered8(true)}
                    onMouseLeave={() => setIsHovered8(false)}
                >
                    <a href="#blog" activeClassName="active">BLOG</a>
                </li>

                <li
                    className='text-sm mt-1 font-bold rounded-xl'
                    style={{
                        color: props.activeSection === 'contact' && theme.ui,
                        // backgroundColor: isHovered9 ? isLightTheme ? `ButtonShadow` : `` : ``,
                        fontSize: isHovered9 ? `16px` : ``,
                        // textDecoration: 'underline',
                        // textDecorationColor: theme.ui
                    }}
                    onMouseEnter={() => setIsHovered9(true)}
                    onMouseLeave={() => setIsHovered9(false)}
                >
                    <a href="#contact" activeClassName="active">CONTACT</a>
                </li>

            </ul>
            <p className="text-sm mt-4">&copy; Copyright 2025.</p>
            <p className="text-sm mb-10">All rights reserved.</p>
            <p className="text-xs italic">Initial creation- 2023.</p>
        </div>
    )
}

export default Sidebar