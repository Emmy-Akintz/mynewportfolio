import React, { useContext } from 'react'
import { BiCodeAlt, BiPaint } from 'react-icons/bi'
import { ThemeContext } from '../contexts/ThemeContext'
import { IconContext } from 'react-icons'

function Services() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)

    const theme = isLightTheme ? light : dark
    return (
        <div className='mt-12'>
            <h1 className="text-sm">WHAT I DO</h1>
            <br />
            <h1 className="font-bold">HERE ARE SOME OF MY EXPERTISE</h1>
            <div className="lg:grid lg:grid-cols-2">
                <div className="card p-5 mt-5 w-[280px] mt-20" style={{ borderBottom: `3px solid ${theme.ui}`, boxShadow: `0px -20px 50px 20px ${theme.bgg}` }}>
                    <div className="">
                        <IconContext.Provider value={{ color: theme.ui }}>
                            <BiCodeAlt />
                        </IconContext.Provider>
                    </div>
                    <p className="mt-4">
                        Web Development
                    </p>
                </div>
                {/* <div className="card p-5 mt-5 w-[280px] mt-20" style={{ borderBottom: `3px solid ${theme.ui}`, boxShadow: `0px -20px 50px 20px ${theme.bgg}` }}>
                    <div className="">
                        <IconContext.Provider value={{ color: theme.ui }}>
                            <BiPaint />
                        </IconContext.Provider>
                    </div>
                    <p className="mt-4">
                        Graphic Design
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default Services