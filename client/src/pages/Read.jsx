import React, { useContext } from 'react'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { ThemeContext } from '../contexts/ThemeContext'
import { AiOutlineComment } from 'react-icons/ai'
import blogImage from '../assets/Emmanuel-2.jpg'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Reveal'

function Read() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div>
            <FadeUp>
                <h1 className="text-sm">READ</h1>
            </FadeUp>
            <br />
            <FadeUp>
                <h1 className="font-bold">RECENT BLOG</h1>
            </FadeUp>
            <br />
            <div className="md:grid lg:grid md:grid-cols-2 lg:grid-cols-2">
                <div className="w-[280px] my-4 p-4">
                    <SlideInLeft>
                        <div className="image w-[200px] rounded-[50%]">
                            <img src={blogImage} alt="" />
                        </div>
                    </SlideInLeft>
                    <div className="text-sm mt-4 flex justify-between w-[70%] items-center">
                        <SlideInLeft>
                            <p className="">APRIL 14</p>
                        </SlideInLeft>
                        <SlideInLeft>
                            <p className="font-bold">|</p>
                        </SlideInLeft>
                        <SlideInLeft>
                            <p className="">WEB DEV</p>
                        </SlideInLeft>
                        <SlideInLeft>
                            <p className="font-bold">|</p>
                        </SlideInLeft>
                        <SlideInLeft>
                            <AiOutlineComment />
                        </SlideInLeft>
                        <SlideInLeft>
                            <p className="">4</p>
                        </SlideInLeft>
                    </div>
                    <SlideInLeft>
                        <h1 className="font-bold text-sm">
                            MY BLOG
                        </h1>
                    </SlideInLeft>
                    <SlideInLeft>
                        <p className="text-justify w-[200px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, obcaecati.
                        </p>
                    </SlideInLeft>
                    <br />
                    <SlideInLeft>
                        <div className="flex">
                            <a className="rounded-xl px-2 py-1" href='/' style={{ background: theme.ui }}>
                                <BsBoxArrowInUpRight />
                            </a>
                        </div>
                    </SlideInLeft>
                </div>
                <div className="w-[280px] my-4 p-4">
                    <SlideInRight>
                        <div className="image w-[200px] rounded-[50%]">
                            <img src={blogImage} alt="" />
                        </div>
                    </SlideInRight>
                    <div className="text-sm mt-4 flex justify-between w-[70%] items-center">
                        <SlideInRight>
                            <p className="">APRIL 14</p>
                        </SlideInRight>
                        <SlideInRight>
                            <p className="font-bold">|</p>
                        </SlideInRight>
                        <SlideInRight>
                            <p className="">WEB DEV</p>
                        </SlideInRight>
                        <SlideInRight>
                            <p className="font-bold">|</p>
                        </SlideInRight>
                        <SlideInRight>
                            <AiOutlineComment />
                        </SlideInRight>
                        <SlideInRight>
                            <p className="">4</p>
                        </SlideInRight>
                    </div>
                    <SlideInRight>
                        <h1 className="font-bold text-sm">
                            MY BLOG
                        </h1>
                    </SlideInRight>
                    <SlideInRight>
                        <p className="text-justify w-[200px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, obcaecati.
                        </p>
                    </SlideInRight>
                    <br />
                    <SlideInRight>
                        <div className="flex">
                            <a className="rounded-xl px-2 py-1" href='/' style={{ background: theme.ui }}>
                                <BsBoxArrowInUpRight />
                            </a>
                        </div>
                    </SlideInRight>
                </div>
            </div>
        </div>
    )
}

export default Read