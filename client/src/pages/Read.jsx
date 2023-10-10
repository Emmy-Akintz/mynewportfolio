import React, { useContext } from 'react'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { ThemeContext } from '../contexts/ThemeContext'
import { AiOutlineComment } from 'react-icons/ai'
import blogImage from '../assets/Emmanuel-2.jpg'

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
                <div className="w-[280px] my-4 p-4">
                    <div className="image w-[200px] rounded-[50%]">
                        <img src={blogImage} alt="" />
                    </div>
                    <div className="text-sm mt-4 flex justify-between w-[70%] items-center">
                        <p className="">APRIL 14</p>
                        <p className="font-bold">|</p>
                        <p className="">WEB DEV</p>
                        <p className="font-bold">|</p>
                        <AiOutlineComment />
                        <p className="">4</p>
                    </div>
                    <h1 className="font-bold text-sm">
                        MY BLOG
                    </h1>
                    <p className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, obcaecati.
                    </p>
                    <br />
                    <div className="flex">
                        <a className="rounded-xl px-2 py-1" href='/' style={{ background: theme.ui }}>
                            <BsBoxArrowInUpRight />
                        </a>
                    </div>
                </div>
                <div className="w-[280px] my-4 p-4">
                    <div className="image w-[200px] rounded-[50%]">
                        <img src={blogImage} alt="" />
                    </div>
                    <div className="text-sm mt-4 flex justify-between w-[70%] items-center">
                        <p className="">APRIL 14</p>
                        <p className="font-bold">|</p>
                        <p className="">WEB DEV</p>
                        <p className="font-bold">|</p>
                        <AiOutlineComment />
                        <p className="">4</p>
                    </div>
                    <h1 className="font-bold text-sm">
                        MY BLOG
                    </h1>
                    <p className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, obcaecati.
                    </p>
                    <br />
                    <div className="flex">
                        <a className="rounded-xl px-2 py-1" href='/' style={{ background: theme.ui }}>
                            <BsBoxArrowInUpRight />
                        </a>
                    </div>
                </div>
                <div className="w-[280px] my-4 p-4">
                    <div className="image w-[200px] rounded-[50%]">
                        <img src={blogImage} alt="" />
                    </div>
                    <div className="text-sm mt-4 flex justify-between w-[70%] items-center">
                        <p className="">APRIL 14</p>
                        <p className="font-bold">|</p>
                        <p className="">WEB DEV</p>
                        <p className="font-bold">|</p>
                        <AiOutlineComment />
                        <p className="">4</p>
                    </div>
                    <h1 className="font-bold text-sm">
                        MY BLOG
                    </h1>
                    <p className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, obcaecati.
                    </p>
                    <br />
                    <div className="flex">
                        <a className="rounded-xl px-2 py-1" href='/' style={{ background: theme.ui }}>
                            <BsBoxArrowInUpRight />
                        </a>
                    </div>
                </div>
                <div className="w-[280px] my-4 p-4">
                    <div className="image w-[200px] rounded-[50%]">
                        <img src={blogImage} alt="" />
                    </div>
                    <div className="text-sm mt-4 flex justify-between w-[70%] items-center">
                        <p className="">APRIL 14</p>
                        <p className="font-bold">|</p>
                        <p className="">WEB DEV</p>
                        <p className="font-bold">|</p>
                        <AiOutlineComment />
                        <p className="">4</p>
                    </div>
                    <h1 className="font-bold text-sm">
                        MY BLOG
                    </h1>
                    <p className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, obcaecati.
                    </p>
                    <br />
                    <div className="flex">
                        <a className="rounded-xl px-2 py-1" href='/' style={{ background: theme.ui }}>
                            <BsBoxArrowInUpRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read