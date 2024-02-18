import React, { useContext } from 'react'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Reveal'
import ToggleTheme from '../components/ToggleTheme'
import { ThemeContext } from '../contexts/ThemeContext'
import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'

function TimeInItself() {

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <div className='TimeInItself text-center lg:text-left m-auto lg:ml-0 p-12 text-justify' style={{
            background: theme.bg,
            color: theme.syntax
        }}>
            <SlideInRight>
                <div className="fixed top-[10px] right-[10px]">
                    <ToggleTheme />
                </div>
            </SlideInRight>
            <SlideInLeft>
                <div className="fixed top-[10px] left-[10px] animate-pulse p-4">
                    <Link to='/'>
                        <MdArrowBack />
                    </Link>
                </div>
            </SlideInLeft>
            {/* BLOG BODY */}
            <FadeUp>
                <h1 className="mt-[100px] font-bold text-4xl text-white-200">
                    TIME IN ITSELF
                </h1>
            </FadeUp>
            <SlideInLeft>
                <p className="mt-[50px]">
                    You will struggle to understand how time flies when you do not utilize it. As we all must've heard, <em className='font-bold'>"time is costly and precious".</em>
                </p>
            </SlideInLeft>
            <SlideInRight>
                <p className="mt-[30px]"></p>
            </SlideInRight>
            <SlideInLeft>
                <p className="mt-[30px]"></p>
            </SlideInLeft>
            <SlideInRight>
                <p className="mt-[30px]"></p>
            </SlideInRight>
        </div>
    )
}

export default TimeInItself