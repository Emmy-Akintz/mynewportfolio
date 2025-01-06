import React, { useContext } from 'react'
import { BiCodeAlt, BiPaint } from 'react-icons/bi'
import { ThemeContext } from '../contexts/ThemeContext'
import { IconContext } from 'react-icons'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Reveal'

function Services() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)

    const theme = isLightTheme ? light : dark
    return (
        <div id='services' className='mt-12'>
            <FadeUp>
                <h1 className="text-sm">WHAT I DO</h1>
            </FadeUp>
            <br />
            <FadeUp>
                <h1 className="font-bold">HERE ARE SOME OF MY EXPERTISE</h1>
            </FadeUp>
            <div className="md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 w-[280px] md:w-[650px] lg:w-[610px]">
                <div className="card p-5 w-[280px] mt-20" style={{ borderBottom: `3px solid ${theme.ui}`, boxShadow: `0px -20px 50px 20px ${theme.bgg}` }}>
                    <SlideInLeft className="">
                        <IconContext.Provider value={{ color: theme.ui }}>
                            <BiCodeAlt />
                        </IconContext.Provider>
                    </SlideInLeft>
                    <SlideInLeft>
                        <p className="mt-4">
                            Web Development
                        </p>
                    </SlideInLeft>
                </div>
                <div className="card p-5 w-[280px] mt-20" style={{ borderBottom: `3px solid ${theme.ui}`, boxShadow: `0px -20px 50px 20px ${theme.bgg}` }}>
                    <SlideInRight className="">
                        <IconContext.Provider value={{ color: theme.ui }}>
                            <BiCodeAlt />
                        </IconContext.Provider>
                    </SlideInRight>
                    <SlideInRight>
                        <p className="mt-4">
                            Mobile Application Development
                        </p>
                    </SlideInRight>
                </div>
                {/* <div className="card p-5 w-[280px] mt-20" style={{ borderBottom: `3px solid ${theme.ui}`, boxShadow: `0px -20px 50px 20px ${theme.bgg}` }}>
                    <SlideInRight className="">
                        <IconContext.Provider value={{ color: theme.ui }}>
                            <BiPaint />
                        </IconContext.Provider>
                    </SlideInRight>
                    <SlideInRight>
                        <p className="mt-4">
                            Graphic Design
                        </p>
                    </SlideInRight>
                </div> */}
            </div>
        </div>
    )
}

export default Services