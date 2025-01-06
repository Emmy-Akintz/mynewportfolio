import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Reveal'

function Experience() {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  return (
    <div id='experience' className='mt-12'>
      <FadeUp>
        <h1 className="text-sm">EXPERIENCE</h1>
      </FadeUp>
      <br />
      <FadeUp>
        <h1 className="font-bold">PROFESSIONAL WORK EXPERIENCE</h1>
      </FadeUp>
      <br />
      <div className="w-[280px] md:w-[650px] lg:w-[610px]">
        <div className="flex justify-between w-[100%]">
          <SlideInLeft>
            <h1 className="font-bold text-xl">Self-Learning</h1>
          </SlideInLeft>
          <SlideInRight>
            <h1 className="text-sm">2021 - Present</h1>
          </SlideInRight>
        </div>
        <div className="flex justify-between w-[100%]">
          <SlideInLeft>
            <h1 className="italic text-sm" style={{ color: theme.ui }}>Fullstack Website Developer</h1>
          </SlideInLeft>
          <SlideInRight>
            <h1 className="text-sm">Nigeria</h1>
          </SlideInRight>
        </div>
        <FadeUp>
          <p className="mt-2 text-justify">
            I've been learning and researching a lot ever since I began coding and I've built a lot of projects with good functionalities.
          </p>
        </FadeUp>
      </div>
      <br />
      <div className="w-[280px] md:w-[650px] lg:w-[610px]">
        <div className="flex justify-between w-[100%]">
          <SlideInLeft>
            <h1 className="font-bold text-xl">Toraaah</h1>
          </SlideInLeft>
          <SlideInRight>
            <h1 className="text-sm">Apr 2024 - Jan 2025 (10 months)</h1>
          </SlideInRight>
        </div>
        <div className="flex justify-between w-[100%]">
          <SlideInLeft>
            <h1 className="italic text-sm" style={{ color: theme.ui }}>Junior Frontend Developer</h1>
          </SlideInLeft>
          <SlideInRight>
            <h1 className="text-sm">Nigeria</h1>
          </SlideInRight>
        </div>
        <FadeUp>
          <p className="mt-2 text-justify">
            Worked closely with the lead developer, team and designers to develop and maintain the website for <a href="https://toraaah.com" style={{ color: theme.ui }} className='italic text-sm underline'>Toraaah</a>. Worked with NextJs, TailwindCss and Redux to ensure the website is responsive, has great user interface and user-friendly.
          </p>
        </FadeUp>
      </div>
      <br />
      <div className="w-[280px] md:w-[650px] lg:w-[610px]">
        <div className="flex justify-between w-[100%]">
          <SlideInLeft>
            <h1 className="font-bold text-xl">Toraaah</h1>
          </SlideInLeft>
          <SlideInRight>
            <h1 className="text-sm">Jan 2025 - Present</h1>
          </SlideInRight>
        </div>
        <div className="flex justify-between w-[100%]">
          <SlideInLeft>
            <h1 className="italic text-sm" style={{ color: theme.ui }}>Mobile Application Developer</h1>
          </SlideInLeft>
          <SlideInRight>
            <h1 className="text-sm">Nigeria</h1>
          </SlideInRight>
        </div>
        <FadeUp>
          <p className="mt-2 text-justify">
            Working closely with the lead developer, team and designers to develop and maintain the mobile application for <a href="https://toraaah.com" style={{ color: theme.ui }} className='italic text-sm underline'>Toraaah</a>. Working with React Native, TailwindCss and Redux to ensure the mobile application is responsive, has great user interface and user-friendly. Also working hard to ensure it has a fast load time and less bundle size.
          </p>
        </FadeUp>
      </div>
    </div>
  )
}

export default Experience