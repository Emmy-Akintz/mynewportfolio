import React, { useContext, useState } from 'react'
import { AiFillGithub, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { FaMedium, FaXTwitter } from 'react-icons/fa6'
import { FiFacebook, FiLinkedin } from 'react-icons/fi'
import { LiaTelegramPlane } from 'react-icons/lia'
import { PiWhatsappLogoDuotone, PiWhatsappLogoLight } from 'react-icons/pi'
import { ThemeContext } from '../contexts/ThemeContext'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Reveal'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [confirm, setConfirm] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        setConfirm('Delivered!')
        setTimeout(() => {
            setConfirm('')
        }, 5000)
    }
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div id='contact' className='mt-12'>
            <FadeUp>
                <h1 className="text-sm">GET IN TOUCH</h1>
            </FadeUp>
            <br />
            <FadeUp>
                <h1 className="font-bold">CONTACT</h1>
            </FadeUp>
            <br />
            <div className="">
                <div className="w-[300px]">
                    <div className="flex justify-between w-[90%] my-8">
                        <SlideInLeft>
                            <div className="w-[50px] p-4" style={{ background: theme.ui }}>
                                <AiOutlineMail />
                            </div>
                        </SlideInLeft>
                        <SlideInLeft>
                            <div className="flex items-center w-[200px]">
                                emzyakints2005@gmail.com
                            </div>
                        </SlideInLeft>
                    </div>
                    <div className="flex justify-between w-[90%] my-8">
                        <SlideInLeft>
                            <div className="w-[50px] p-4" style={{ background: theme.ui }}>
                                <IoLocationOutline />
                            </div>
                        </SlideInLeft>
                        <SlideInLeft>
                            <div className="flex items-center w-[200px]">
                                Akure, Ondo State, Nigeria
                            </div>
                        </SlideInLeft>
                    </div>
                    <div className="flex justify-between w-[90%] my-8">
                        <SlideInLeft>
                            <div className="w-[50px] p-4" style={{ background: theme.ui }}>
                                <AiOutlinePhone />
                            </div>
                        </SlideInLeft>
                        <SlideInLeft>
                            <div className="flex items-center w-[200px]">
                                +234 807 368 0320 <br />+234 816 765 9926
                            </div>
                        </SlideInLeft>
                    </div>
                    <div className="flex justify-between w-[80%]">
                        <FadeUp>
                            <a className="x" href='https://twitter.com/emmy_ak7'><FaXTwitter /></a>
                        </FadeUp>
                        <FadeUp>
                            <a className="facebook" href='https://web.facebook.com/ayomide.akintan.357/'><FiFacebook /></a>
                        </FadeUp>
                        <FadeUp>
                            <a className="instagram" href='https://www.instagram.com/emmy_akintz/'><AiOutlineInstagram /></a>
                        </FadeUp>
                        <FadeUp>
                            <a className="linkedIn" href='https://www.linkedin.com/in/ayomide-akintan-3a10a028b/'><FiLinkedin /></a>
                        </FadeUp>
                        <FadeUp>
                            <a className="telegram" href='http://t.me/EmmyAkints'><LiaTelegramPlane /></a>
                        </FadeUp>
                        <FadeUp>
                            <a className="whatsapp" href='http://wa.me/+2348073680320'><PiWhatsappLogoLight /></a>
                        </FadeUp>
                        <FadeUp>
                            <a className="whatsapp" href='http://wa.me/+2348167659926'><PiWhatsappLogoDuotone /></a>
                        </FadeUp>
                        <FadeUp>
                            <a className="github" href='https://github.com/Emmy-Akintz/'><AiFillGithub /></a>
                        </FadeUp>
                        <FadeUp>
                            <a className="medium" href='https://medium.com/@emzyakints2005'><FaMedium /></a>
                        </FadeUp>
                    </div>
                    <br />
                    <FadeUp>
                        <a href='mailto:emzyakints2005@gmail.com' className='py-4 px-2 cursor-pointer' style={{ background: theme.ui }}>
                            SEND MESSAGE
                        </a>
                    </FadeUp>
                </div>
            </div>
        </div>
    )
}

export default Contact