import React, { useContext } from 'react'
import { BsCodeSlash } from 'react-icons/bs'
import { ThemeContext } from '../contexts/ThemeContext'

function About() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark2
  return (
    <div className='About'>
        <h1 className="">ABOUT US</h1>
        <h1 className="font-bold text-2xl">WHO I AM?</h1>
        <p className="mt-12 w-[300px] lg:w-[700px]"><span className="font-bold">Hi, I'm Ayomide Emmanuel Akintan (Emmy-Akintz), </span>a tech bro and welcome to my space!<span className='font-bold'>:)</span> I am a software engineer who loves to create websites for people. I think that people should look at the bigger picture when they are building something. I love to work in groups where everyone can voice their opinions and ideas.</p>
        <div className="card p-5 border mt-5 w-[300px]" style={{  }}>
          <div className="">
            <BsCodeSlash />
          </div>
          <p className="mt-4">
            Web Development
          </p>
        </div>
    </div>
  )
}

export default About