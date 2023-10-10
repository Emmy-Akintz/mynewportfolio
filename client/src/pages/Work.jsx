import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AiFillGithub, AiOutlineEye, AiOutlineShareAlt } from 'react-icons/ai'

function Work() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='mt-12'>
            <h1 className="text-sm">MY WORK</h1>
            <br />
            <h1 className="font-bold">RECENT WORK</h1>
            <br />
            <div className="lg:grid lg:grid-cols-2">
                <div className="card w-[280px] my-4 p-4" style={{ background: theme.ui }}>
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
                <div className="card w-[280px] my-4 p-4" style={{ background: theme.ui }}>
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
            </div>
        </div>
    )
}

export default Work