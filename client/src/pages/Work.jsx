import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AiOutlineShareAlt } from 'react-icons/ai'

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
                    <p className="">WORK 01</p>
                    <br />
                    <div className="flex justify-between w-[50%]">
                        <div className="rounded-xl px-2 py-1" style={{ background: theme.bgg }}>
                            <AiOutlineShareAlt />
                        </div>
                        <div className="rounded-xl px-2 py-1" style={{ background: theme.bgg }}>
                            <AiOutlineShareAlt />
                        </div>
                        <div className="rounded-xl px-2 py-1" style={{ background: theme.bgg }}>
                            <AiOutlineShareAlt />
                        </div>
                    </div>
                </div>
                <div className="card w-[280px] my-4 p-4" style={{ background: theme.ui }}>
                    <p className="">WORK 01</p>
                    <br />
                    <div className="flex justify-between w-[50%]">
                        <div className="rounded-xl px-2 py-1" style={{ background: theme.bgg }}>
                            <AiOutlineShareAlt />
                        </div>
                        <div className="rounded-xl px-2 py-1" style={{ background: theme.bgg }}>
                            <AiOutlineShareAlt />
                        </div>
                        <div className="rounded-xl px-2 py-1" style={{ background: theme.bgg }}>
                            <AiOutlineShareAlt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work