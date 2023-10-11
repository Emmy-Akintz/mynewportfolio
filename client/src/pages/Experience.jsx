import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function Experience() {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  return (
    <div className='mt-12'>
        <h1 className="text-sm">EXPERIENCE</h1>
        <br />
        <h1 className="font-bold">WORK EXPERIENCE</h1>
        <br />
        <div className="w-[280px] lg:w-[700px]">
          <div className="flex justify-between w-[100%]">
            <h1 className="font-bold">Self-Learning</h1>
            <h1 className="">2021-Date</h1>
          </div>
          <div className="flex justify-between w-[100%]">
            <h1 className="font-bold" style={{ color: theme.ui }}>Website Developer</h1>
            <h1 className="">Nigeria</h1>
          </div>
          <p className="mt-2">
            I've been learning and researching a lot ever since I began coding and I've built a lot of projects with good functionalities.
          </p>
        </div>
    </div>
  )
}

export default Experience