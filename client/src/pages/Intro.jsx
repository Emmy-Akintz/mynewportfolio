import React from 'react'
// import image from '../assets/Emmanuel-2-removebg-preview.png'
import cv from "../assets/Ayomide's_Resume.pdf"
import { MdDownload } from 'react-icons/md'
import { FadeUp } from '../components/Reveal'

function Intro() {
    return (
        <div id='home' className='Intro text-center lg:text-left m-auto lg:ml-0 h-[100vh]'
            style={{
                // backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "right"
            }}>
            <FadeUp>
                <h1 className='mt-[100px] font-bold text-4xl text-white-200'>Hi</h1>
            </FadeUp>
            <FadeUp>
                <h1 className="mt-3 font-bold text-3xl lg:text-4xl">I'm Emmy-Akintz</h1>
            </FadeUp>
            <br />
            <FadeUp>
                <p className="w-[300px] md:w-[500px] lg:w-[500px] text-justify m-auto lg:ml-0 text-left">
                    I am a self-motivated full stack web developer (MERN). I love to build fully functioning and client friendly websites.
                </p>
            </FadeUp>
            <br />
            <FadeUp>
                <a href={cv} download='Emmy-Akintz-Resume' target='_blank' rel='nonreferrer'>
                    <button className='flex w-[140px] justify-between border rounded p-2 m-auto lg:ml-0 items-center'>Download CV <MdDownload /></button>
                </a>
            </FadeUp>
        </div>
    )
}

export default Intro