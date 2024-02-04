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
    const [option4, setOption4] = useState(false)
    return (
        <div id='education' className='mt-12'>
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
                        I finished my secondary school education at <a href="https://www.nnssimeri.com/" style={{ color: theme.ui }} className='underline'>Nigerian Navy Secondary School, Imeri, Ondo State, Nigeria</a> . My favourite subjects then were mathematics, physics, further mathematics and technical drawing (I wanted to be an engineer 😅).
                    </div>
                </div>
            </SlideInRight>
            <SlideInLeft>
                <div onClick={() => setOption3(!option3)} className="block mt-1">
                    <div className="w-[280px] md:w-[650px] lg:w-[610px] p-2 rounded flex justify-between items-center cursor-pointer" style={{ background: theme.ui }}>
                        <p className="text-sm">WEB DEVELOPMENT TRAINING</p>
                        <AiOutlinePlus className={option3 ? 'hidden' : ''} />
                        <AiOutlineMinus className={option3 ? '' : 'hidden'} />
                    </div>
                    <div className={option3 ? "block border mt-1 p-2 rounded w-[280px] md:w-[650px] lg:w-[610px]" : "hidden"}>
                        I started my training at JIT solutions, Akure 2021 October and completed it December 2022. During all my time there I created a couple of projects.
                        <br />
                        <a href="https://jitsolutionsng.com/verification.php?id=635" style={{ color: theme.ui }} className='underline'>Click to see my proof of certification</a>
                    </div>
                </div>
            </SlideInLeft>
            <SlideInRight>
                <div onClick={() => setOption4(!option4)} className="block mt-1">
                    <div className="w-[280px] md:w-[650px] lg:w-[610px] p-2 rounded flex justify-between items-center cursor-pointer" style={{ background: theme.ui }}>
                        <p className="text-sm">PRIMARY SCHOOL EDUCATION</p>
                        <AiOutlinePlus className={option4 ? 'hidden' : ''} />
                        <AiOutlineMinus className={option4 ? '' : 'hidden'} />
                    </div>
                    <div className={option4 ? "block border mt-1 p-2 rounded w-[280px] md:w-[650px] lg:w-[610px]" : "hidden"}>
                        I started my education at USA (Universal School Akure) and was there till primary four after which I transfered to <a href="https://fullnessofgod.com.ng/" style={{ color: theme.ui }} className='underline'>Fullness Of God, Akure, Ondo State</a> for my primary 5 education. After which I went to high school.
                    </div>
                </div>
            </SlideInRight>
        </div>
    )
}

export default Education