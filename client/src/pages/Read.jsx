import React, { useContext } from 'react'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { ThemeContext } from '../contexts/ThemeContext'
import { AiOutlineComment } from 'react-icons/ai'
// import blogImage from '../assets/CV-pic.jpg'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Reveal'
import { Link } from 'react-router-dom'

function Read() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div id='blog'>
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
                            <img src='https://random.imagecdn.app/v1/image?width=500&height=300' alt="" className='rounded' />
                        </div>
                    </SlideInLeft>
                    <div className="text-sm mt-4 flex justify-between w-[70%] items-center">
                        <SlideInLeft>
                            <p className="">NOV 10</p>
                        </SlideInLeft>
                        <SlideInLeft>
                            <p className="font-bold">|</p>
                        </SlideInLeft>
                        <SlideInLeft>
                            <p className="">SELF HELP</p>
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
                            ACTIONS HAVE GREATER IMPACTS THAN WE THINK
                        </h1>
                    </SlideInLeft>
                    <SlideInLeft>
                        <p className="text-justify w-[200px]">
                            A car moving without a steering wheel is bound for an accident. A man without a purpose/vision/aim is bound to live a life filled with frustration.
                        </p>
                    </SlideInLeft>
                    <br />
                    <SlideInLeft>
                        <div className="flex">
                            <Link to='/AHGITWT' className="rounded-xl px-2 py-1" style={{ background: theme.ui }}>
                                <BsBoxArrowInUpRight />
                            </Link>
                        </div>
                    </SlideInLeft>
                </div>
                <div className="w-[280px] my-4 p-4">
                    <SlideInRight>
                        <div className="image w-[200px] rounded-[50%]">
                            <img src='https://random.imagecdn.app/v1/image?width=500&height=300' alt="" className='rounded' />
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
                            <Link to='/' className="rounded-xl px-2 py-1" style={{ background: theme.ui }}>
                                <BsBoxArrowInUpRight />
                            </Link>
                        </div>
                    </SlideInRight>
                </div>
            </div>
        </div>
    )
}

export default Read