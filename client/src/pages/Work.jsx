import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AiFillGithub, AiOutlineEye, AiOutlineShareAlt } from 'react-icons/ai'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Reveal'

function Work() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div id='work' className='mt-12'>
            <FadeUp>
                <h1 className="text-sm">MY WORK</h1>
            </FadeUp>
            <br />
            <FadeUp>
                <h1 className="font-bold">RECENT WORK</h1>
            </FadeUp>
            <br />
            <div className="md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 w-[280px] md:w-[650px] lg:w-[650px]">
                <SlideInLeft>
                    <div className="card w-[280px] my-4 p-4 rounded" style={{ background: theme.ui }}>
                        <iframe src='https://larry-pat-foods.netlify.app/' title='Larry-Pat Page' width='100%' className='mb-4'></iframe>
                        <p className="font-bold">WORK 01</p>
                        <p className="text-sm">LARRY-PAT FOODS</p>
                        <br />
                        <div className="flex justify-between w-[30%]">
                            {/* <a className="rounded-xl px-2 py-1" href='/' style={{ background: theme.bgg }}>
                            <AiOutlineShareAlt />
                        </a> */}
                            <a className="rounded-xl px-2 py-1" href='https://larry-pat-foods.netlify.app/' style={{ background: theme.bgg }}>
                                <AiOutlineEye />
                            </a>
                            <a className="rounded-xl px-2 py-1" href='https://github.com/Emmy-Akintz/larry-pat-foods' style={{ background: theme.bgg }}>
                                <AiFillGithub />
                            </a>
                        </div>
                    </div>
                </SlideInLeft>
                <SlideInRight>
                    <div className="card w-[280px] my-4 p-4 rounded" style={{ background: theme.ui }}>
                        <iframe src='https://pre-hackathon.netlify.app/' title='Hackathon Page' width='100%' className='mb-4'></iframe>
                        <p className="font-bold">WORK 02</p>
                        <p className="text-sm">PRE-HACKATHON</p>
                        <br />
                        <div className="flex justify-between w-[30%]">
                            {/* <a className="rounded-xl px-2 py-1" href='/' style={{ background: theme.bgg }}>
                            <AiOutlineShareAlt />
                        </a> */}
                            <a className="rounded-xl px-2 py-1" href='https://pre-hackathon.netlify.app/' style={{ background: theme.bgg }}>
                                <AiOutlineEye />
                            </a>
                            <a className="rounded-xl px-2 py-1" href='https://github.com/Emmy-Akintz/pre-hackathon' style={{ background: theme.bgg }}>
                                <AiFillGithub />
                            </a>
                        </div>
                    </div>
                </SlideInRight>
                <SlideInLeft>
                    <div className="card w-[280px] my-4 p-4 rounded" style={{ background: theme.ui }}>
                        <iframe src='https://emzy-calculator.netlify.app/' title='Hackathon Page' width='100%' className='mb-4'></iframe>
                        <p className="font-bold">WORK 03</p>
                        <p className="text-sm">LIGHT/DARK THEME CALCULATOR</p>
                        <br />
                        <div className="flex justify-between w-[30%]">
                            {/* <a className="rounded-xl px-2 py-1" href='/' style={{ background: theme.bgg }}>
                            <AiOutlineShareAlt />
                        </a> */}
                            <a className="rounded-xl px-2 py-1" href='https://emzy-calculator.netlify.app/' style={{ background: theme.bgg }}>
                                <AiOutlineEye />
                            </a>
                            {/* <a className="rounded-xl px-2 py-1" href='https://github.com/Emmy-Akintz/pre-hackathon' style={{ background: theme.bgg }}>
                                <AiFillGithub />
                            </a> */}
                        </div>
                    </div>
                </SlideInLeft>
                <SlideInRight>
                    <div className="card w-[280px] my-4 p-4 rounded" style={{ background: theme.ui }}>
                        <iframe src='https://emmy-currency-converter.netlify.app/' title='Hackathon Page' width='100%' className='mb-4'></iframe>
                        <p className="font-bold">WORK 04</p>
                        <p className="text-sm">CURRENCY CONVERTER</p>
                        <br />
                        <div className="flex justify-between w-[30%]">
                            {/* <a className="rounded-xl px-2 py-1" href='/' style={{ background: theme.bgg }}>
                            <AiOutlineShareAlt />
                        </a> */}
                            <a className="rounded-xl px-2 py-1" href='https://emmy-currency-converter.netlify.app/' style={{ background: theme.bgg }}>
                                <AiOutlineEye />
                            </a>
                            <a className="rounded-xl px-2 py-1" href='https://github.com/Emmy-Akintz/currency-converter' style={{ background: theme.bgg }}>
                                <AiFillGithub />
                            </a>
                        </div>
                    </div>
                </SlideInRight>
            </div>
        </div>
    )
}

export default Work