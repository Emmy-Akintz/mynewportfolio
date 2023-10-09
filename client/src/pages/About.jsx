import React, { useContext } from 'react'
import { IconContext } from 'react-icons'
import { BiCodeAlt } from 'react-icons/bi'
import { ThemeContext } from '../contexts/ThemeContext'

function About() {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  return (
    <div className='About'>
      <h1 className="text-sm">ABOUT ME</h1>
      <br />
      <h1 className="font-bold text-2xl">WHO I AM?</h1>
      <p className="mt-12 w-[300px] lg:w-[700px]"><span className="font-bold">Hi, I'm Ayomide Emmanuel Akintan (Emmy-Akintz), </span>a tech bro and welcome to my space!<span className='font-bold'>:)</span> I am a software engineer who loves to create websites for people. I think that people should look at the bigger picture when they are building something. I love to work in groups where everyone can voice their opinions and ideas.</p>
      <br />
      <br />
      <div className="p-12 text-black w-[300px] lg:w-[700px]" style={{ background: theme.ui }}>
        <p className='font-bold'>I am happy to let you know <br /> that I've done 10 projects successfully!</p>
        <br />
        <button className='border border-black px-2'>HIRE ME</button>
      </div>
    </div>
  )
}

export default About