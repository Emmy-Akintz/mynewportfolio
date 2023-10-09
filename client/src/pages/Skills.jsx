import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function Skills() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='mt-12'>
            <h1 className="text-sm">MY SPECIALTY</h1>
            <br />
            <h1 className="font-bold">MY SKILLS</h1>
            <br />
            <p className="">
                Over the past few years I've been able to learn a number of programming languages. Some I've developed my self in very well while others, well they're there. It's a gradual thing I believe. The goal is to get better everyday and keep on learning more.
            </p>
            <br />
            <div className="lg:grid lg:grid-cols-2">
                <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">HTML</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div>
                <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">CSS</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div>
                <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">Javascript</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div>
                <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">Typescript</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div>
                <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">Bootstrap</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div>
                <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">Tailwind</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div>
                <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">PHP</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div>
                <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">mySql</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div>
                <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">MongoDB</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div>
                <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">ExpressJS</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div>
                <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">ReactJS</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div>
                <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">NodeJS</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div>
                <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">C program</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div>
                {/* <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">Photoshop</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div> */}
                {/* <div className="block w-[280px] my-4">
                    <div className="flex justify-between">
                        <p className="">Coreldraw</p>
                        <p className="">90%</p>
                    </div>
                    <div className="w-[100%] h-[10px] rounded-2xl overflow-hidden" style={{ background: theme.bgg }}>
                        <div className="w-[90%] h-[100%] rounded-2xl" style={{ background: theme.ui }}></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Skills