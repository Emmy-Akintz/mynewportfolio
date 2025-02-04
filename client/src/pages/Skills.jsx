import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Reveal'

function Skills() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div id='skills' className='mt-12'>
            <FadeUp>
                <h1 className="text-sm">MY SPECIALTY</h1>
            </FadeUp>
            <br />
            <FadeUp>
                <h1 className="font-bold">MY SKILLS</h1>
            </FadeUp>
            <br />
            <FadeUp>
                <p className="w-[280px] md:w-[650px] lg:w-[610px] text-justify">
                    Over the past few years I've been able to learn a number of programming languages. Some I've developed my self in very well while others, well they're there. It's a gradual thing I believe. The goal is to get better everyday and keep on learning more.
                </p>
            </FadeUp>
            <br />
            <div className="md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 w-[280px] md:w-[650px] lg:w-[650px]">
                <SlideInLeft>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">HTML</p>
                            <p className="">90%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInLeft>
                <SlideInRight>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">CSS</p>
                            <p className="">90%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInRight>
                <SlideInLeft>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">Javascript ✨✨</p>
                            <p className="">90%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInLeft>
                <SlideInRight>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">Typescript ✨✨✨</p>
                            <p className="">90%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInRight>
                <SlideInLeft>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">Bootstrap</p>
                            <p className="">90%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInLeft>
                <SlideInRight>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">Tailwind ✨✨✨</p>
                            <p className="">90%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInRight>
                <SlideInLeft>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">PHP</p>
                            <p className="">30%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[30%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInLeft>
                <SlideInRight>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">mySql</p>
                            <p className="">30%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[30%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInRight>
                <SlideInLeft>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">MongoDB ✨✨</p>
                            <p className="">80%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[80%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInLeft>
                <SlideInRight>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">ExpressJS ✨✨</p>
                            <p className="">80%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[80%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInRight>
                <SlideInLeft>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">ReactJS ✨✨</p>
                            <p className="">90%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInLeft>
                <SlideInRight>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">NodeJS ✨✨</p>
                            <p className="">80%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[80%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInRight>
                <SlideInLeft>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">C program</p>
                            <p className="">30%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[30%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInLeft>
                <SlideInRight>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">NextJs ✨✨✨</p>
                            <p className="">90%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInRight>
                <SlideInLeft>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">C#</p>
                            <p className="">40%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[40%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInLeft>
                <SlideInRight>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">C++</p>
                            <p className="">40%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[40%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInRight>
                <SlideInLeft>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">Java ✨</p>
                            <p className="">50%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[50%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInLeft>
                <SlideInRight>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">React Native ✨✨✨</p>
                            <p className="">90%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInRight>
                {/* <SlideInRight>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">Photoshop</p>
                            <p className="">90%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInRight> */}
                {/* <SlideInLeft>
                    <div className="block w-[280px] my-4">
                        <div className="flex justify-between">
                            <p className="">Coreldraw</p>
                            <p className="">90%</p>
                        </div>
                        <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                            <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                        </div>
                    </div>
                </SlideInLeft> */}
            </div>
        </div>
    )
}

export default Skills