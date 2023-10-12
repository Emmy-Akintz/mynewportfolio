import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Reveal'

function Experience() {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  return (
    <div className='mt-12'>
      <FadeUp>
        <h1 className="text-sm">EXPERIENCE</h1>
      </FadeUp>
      <br />
      <FadeUp>
        <h1 className="font-bold">WORK EXPERIENCE</h1>
      </FadeUp>
      <br />
      <div className="w-[280px] md:w-[650px] lg:w-[610px]">
        <div className="flex justify-between w-[100%]">
          <SlideInLeft>
            <h1 className="font-bold">Self-Learning</h1>
          </SlideInLeft>
          <SlideInRight>
            <h1 className="">2021-Date</h1>
          </SlideInRight>
        </div>
        <div className="flex justify-between w-[100%]">
          <SlideInLeft>
            <h1 className="font-bold" style={{ color: theme.ui }}>Website Developer</h1>
          </SlideInLeft>
          <SlideInRight>
            <h1 className="">Nigeria</h1>
          </SlideInRight>
        </div>
        <FadeUp>
          <p className="mt-2 text-justify">
            I've been learning and researching a lot ever since I began coding and I've built a lot of projects with good functionalities.
          </p>
        </FadeUp>
      </div>
    </div>
  )
}

export default Experience