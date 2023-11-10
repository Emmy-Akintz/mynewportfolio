import React, { useContext } from 'react'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Reveal'
import ToggleTheme from '../components/ToggleTheme'
import { ThemeContext } from '../contexts/ThemeContext'
import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'

function AHGITWT() {

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <div className='AHGITWT text-center lg:text-left m-auto lg:ml-0 p-12 text-justify' style={{
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
                    ACTIONS HAVE GREATER IMPACTS THAN WE THINK
                </h1>
            </FadeUp>
            <SlideInLeft>
                <p className="mt-[50px]">
                    A car moving without a steering wheel is bound for an accident. A man without a purpose/vision/aim is bound to live a life filled with frustration.
                </p>
            </SlideInLeft>
            <SlideInRight>
                <p className="mt-[30px]">
                    Many a times, anger is caused by uncertainty. A man living his life without a purpose is definitely uncertain. A little scenerio, humans in a sense are a representation of network. Say for example, every person on average should know an average of 1000 people in his of her life at least well enough to talk to them. That being the case, every individual is one step from influencing a million and two steps away from influencing a billion and so on.
                </p>
            </SlideInRight>
            <SlideInLeft>
                <p className="mt-[30px]">
                    We as humans tend to focus on the smallest problems closest to us wether or not we are solving it. If a person should settle down and do something as small as cleaning up his or her room. Going into the day, there's this confidence in form of positive energy that is just happy about the fact that the room at home is clean so that isn't a problem anymore. The next step is most likely for the brain to look for other problems to solve. Walking past the street to office/school and greeting people with a positive energy is also spreading positive energy to them and doing so with negative energy spreads negative energy to them. Then they most likely spread the energy they've received and that automatically means that when we do the right thing, it is better than we think and when we do the wrong thing, it is worse than we think.
                </p>
            </SlideInLeft>
            <SlideInRight>
                <p className="mt-[30px]">
                    When we are able to do the smallest of things right, we begin to develop from being negative to being positive. "In most cases, people are a product of their circumstances" and so a person who fails to do the smallest things right lives in a negative environment because it's his or her environment that has the effect of those small actions taken.
                </p>
            </SlideInRight>
        </div>
    )
}

export default AHGITWT