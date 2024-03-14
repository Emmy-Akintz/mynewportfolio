import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ThemeContext } from '../contexts/ThemeContext'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Reveal'

function Education() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    const [option1, setOption1] = useState()
    const [option2, setOption2] = useState()
    const [option3, setOption3] = useState()
    const [option4, setOption4] = useState()

    const [option, setOption] = useState(1)

    useEffect(() => {
        setOption(1);
        setOption1(true);
        setOption2(false);
        setOption3(false);
        setOption4(false);
    }, []);

    switch (option) {
        case 1:
            setOption(true)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            break;
        case 2:
            setOption(false)
            setOption2(true)
            setOption3(false)
            setOption4(false)
            break
        case 3:
            setOption(false)
            setOption2(false)
            setOption3(true)
            setOption4(false)
            break
        case 4:
            setOption(false)
            setOption2(false)
            setOption3(false)
            setOption4(true)
            break
        default:
            break;
    }

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
                <div onClick={() => {
                    setOption1(!option1)
                    if (option1 === false) {
                        setOption(1)
                    } else {
                        setOption2(false)
                        setOption3(false)
                        setOption4(false)
                    }
                }} className="block">
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
                <div onClick={() => {
                    setOption2(!option2)
                    if (option2 === false) {
                        setOption(2)
                        setOption1(false)
                    }
                }} className="block mt-1">
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
                <div onClick={() => {
                    setOption3(!option3)
                    if (option3 === false) {
                        setOption(3)
                        setOption1(false)
                    }
                }} className="block mt-1">
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
                <div onClick={() => {
                    setOption4(!option4)
                    if (option4 === false) {
                        setOption(4)
                        setOption1(false)
                    }
                }} className="block mt-1">
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