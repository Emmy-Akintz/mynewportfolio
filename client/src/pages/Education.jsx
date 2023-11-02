import React, { useContext, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ThemeContext } from '../contexts/ThemeContext'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Reveal'

function Education() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    const [option1, setOption1] = useState(true)
    const [option2, setOption2] = useState(false)
    const [option3, setOption3] = useState(false)
    return (
        <div className='mt-12'>
            <FadeUp>
                <h1 className="text-sm">EDUCATION</h1>
            </FadeUp>
            <br />
            <FadeUp>
                <h1 className="font-bold">EDUCATION</h1>
            </FadeUp>
            <br />
            <SlideInLeft>
                <div onClick={() => setOption1(!option1)} className="block">
                    <div className="w-[280px] md:w-[650px] lg:w-[610px] p-2 rounded flex justify-between items-center cursor-pointer" style={{ background: theme.ui }}>
                        <p className="text-sm">BACHELOR DEGREE OF COMPUTER SCIENCE</p>
                        <AiOutlinePlus className={option1 ? 'hidden' : ''} />
                        <AiOutlineMinus className={option1 ? '' : 'hidden'} />
                    </div>
                    <div className={option1 ? "border p-2 rounded w-[280px] md:w-[650px] lg:w-[610px] mt-1" : "hidden"}>
                        I am currently studying computer science at Landmark University, Omu Aran, Kwara State, Nigeria. I will get my degree by the year 2025.
                    </div>
                </div>
            </SlideInLeft>
            <SlideInRight>
                <div onClick={() => setOption2(!option2)} className="block mt-1">
                    <div className="w-[280px] w-[280px] md:w-[650px] lg:w-[610px] p-2 rounded flex justify-between items-center cursor-pointer" style={{ background: theme.ui }}>
                        <p className="text-sm">HIGH SCHOOL SECONDARY EDUCATION</p>
                        <AiOutlinePlus className={option2 ? 'hidden' : ''} />
                        <AiOutlineMinus className={option2 ? '' : 'hidden'} />
                    </div>
                    <div className={option2 ? "block border mt-1 p-2 rounded w-[280px] md:w-[650px] lg:w-[610px]" : "hidden"}>
                        I finished my secondary school education at Nigerian Navy Secondary School, Imeri, Ondo State, Nigeria. My favourite subjects then were mathematics, physics, further mathematics and technical drawing (I wanted to be an engineer 😅).
                    </div>
                </div>
            </SlideInRight>
            <FadeUp>
                <div onClick={() => setOption3(!option3)} className="block mt-1">
                    <div className="w-[280px] md:w-[650px] lg:w-[610px] p-2 rounded flex justify-between items-center cursor-pointer" style={{ background: theme.ui }}>
                        <p className="text-sm">WEB DEVELOPMENT TRAINING</p>
                        <AiOutlinePlus className={option3 ? 'hidden' : ''} />
                        <AiOutlineMinus className={option3 ? '' : 'hidden'} />
                    </div>
                    <div className={option3 ? "block border mt-1 p-2 rounded w-[280px] md:w-[650px] lg:w-[610px]" : "hidden"}>
                        I started my training at JIT solutions, Akure 2021 October and completed it December 2022. During all my time there I created a couple of projects.
                        <a href="https://jitsolutionsng.com/verification.php?id=635" style={{ color: theme.ui }}> Click to see my proof of certification</a>
                    </div>
                </div>
            </FadeUp>
        </div>
    )
}

export default Education