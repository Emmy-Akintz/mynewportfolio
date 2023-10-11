import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { FadeUp } from '../components/Reveal'

function About() {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  return (
    <div className='About'>
      <FadeUp>
        <h1 className="text-sm">ABOUT ME</h1>
      </FadeUp>
      <br />
      <FadeUp>
        <h1 className="font-bold text-2xl">WHO I AM?</h1>
      </FadeUp>
      <FadeUp>
        <p className="mt-12 w-[300px] md:w-[400px] lg:w-[700px]"><span className="font-bold">Hi, I'm Ayomide Emmanuel Akintan (Emmy-Akintz), </span>a tech bro and welcome to my space!<span className='font-bold'>:)</span> I am a software engineer who loves to create websites for people. I think that people should look at the bigger picture when they are building something. I love to work in groups where everyone can voice their opinions and ideas.</p>
      </FadeUp>
      <br />
      <br />
      <div className="p-12 text-black w-[300px] md:w-[400px] lg:w-[700px]" style={{ background: theme.ui }}>
        <FadeUp>
          <p className='font-bold'>I am happy to let you know <br /> that I've done 10 projects successfully!</p>
        </FadeUp>
        <br />
        <FadeUp>
          <button className='border border-black px-2'>HIRE ME</button>
        </FadeUp>
      </div>
    </div>
  )
}

export default About