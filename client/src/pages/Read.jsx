import React, { useContext } from 'react'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { ThemeContext } from '../contexts/ThemeContext'

function Read() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div>
            <h1 className="text-sm">READ</h1>
            <br />
            <h1 className="font-bold">RECENT BLOG</h1>
            <br />
            <div className="lg:grid lg:grid-cols-2">
                <div className="border w-[280px] my-4 p-4">
                    <h1 className="">
                        MY BLOG
                    </h1>
                    <p className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, obcaecati.
                    </p>
                    <br />
                    <div className="flex">
                        <a className="rounded-xl px-2 py-1" href='https://github.com/Emmy-Akintz/larry-pat-foods' style={{ background: theme.ui }}>
                            <BsBoxArrowInUpRight />
                        </a>
                    </div>
                </div>
                <div className="border w-[280px] my-4 p-4">
                    <h1 className="">
                        MY BLOG
                    </h1>
                    <p className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, obcaecati.
                    </p>
                    <br />
                    <div className="flex">
                        <a className="rounded-xl px-2 py-1" href='https://github.com/Emmy-Akintz/larry-pat-foods' style={{ background: theme.ui }}>
                            <BsBoxArrowInUpRight />
                        </a>
                    </div>
                </div>
                <div className="border w-[280px] my-4 p-4">
                    <h1 className="">
                        MY BLOG
                    </h1>
                    <p className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, obcaecati.
                    </p>
                    <br />
                    <div className="flex">
                        <a className="rounded-xl px-2 py-1" href='https://github.com/Emmy-Akintz/larry-pat-foods' style={{ background: theme.ui }}>
                            <BsBoxArrowInUpRight />
                        </a>
                    </div>
                </div>
                <div className="border w-[280px] my-4 p-4">
                    <h1 className="">
                        MY BLOG
                    </h1>
                    <p className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, obcaecati.
                    </p>
                    <br />
                    <div className="flex">
                        <a className="rounded-xl px-2 py-1" href='https://github.com/Emmy-Akintz/larry-pat-foods' style={{ background: theme.ui }}>
                            <BsBoxArrowInUpRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read