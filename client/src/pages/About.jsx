import React, { useContext } from 'react'
import { IconContext } from 'react-icons'
import { BsCodeSlash } from 'react-icons/bs'
import { ThemeContext } from '../contexts/ThemeContext'

function About() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
  return (
    <div className='About'>
        <h1 className="">ABOUT US</h1>
        <h1 className="font-bold text-2xl">WHO I AM?</h1>
        <p className="mt-12 w-[300px] lg:w-[700px]"><span className="font-bold">Hi, I'm Ayomide Emmanuel Akintan (Emmy-Akintz), </span>a tech bro and welcome to my space!<span className='font-bold'>:)</span> I am a software engineer who loves to create websites for people. I think that people should look at the bigger picture when they are building something. I love to work in groups where everyone can voice their opinions and ideas.</p>
        <div className="card p-5 mt-5 w-[300px]" style={{ borderBottom: `3px solid ${theme.ui}`, boxShadow: `0px -20px 50px 20px ${theme.bgg}` }}>
          <div className="">
<IconContext.Provider value={{ color: theme.ui, fontWeight: '700' }}>
            <BsCodeSlash />
</IconContext.Provider>
          </div>
          <p className="mt-4">
            Web Development
          </p>
        </div>
    </div>
  )
}

export default About