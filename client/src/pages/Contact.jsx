import React, { useContext, useState } from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { ThemeContext } from '../contexts/ThemeContext'

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
        <div className='mt-12'>
            <h1 className="text-sm">GET IN TOUCH</h1>
            <br />
            <h1 className="font-bold">CONTACT</h1>
            <br />
            <div className="lg:grid lg:grid-cols-2">
                <div className="w-[300px]">
                    <div className="flex justify-between w-[90%] my-8">
                        <div className="w-[50px] p-4" style={{ background: theme.ui }}>
                            <AiOutlineMail />
                        </div>
                        <div className="flex items-center w-[200px]">
                            emzyakints2005@gmail.com
                        </div>
                    </div>
                    <div className="flex justify-between w-[90%] my-8">
                        <div className="w-[50px] p-4" style={{ background: theme.ui }}>
                            <IoLocationOutline />
                        </div>
                        <div className="flex items-center w-[200px]">
                            Akure, Ondo State, Nigeria
                        </div>
                    </div>
                    <div className="flex justify-between w-[90%] my-8">
                        <div className="w-[50px] p-4" style={{ background: theme.ui }}>
                            <AiOutlinePhone />
                        </div>
                        <div className="flex items-center w-[200px]">
                            +234 807 368 0320 <br />+234 816 765 9926
                        </div>
                    </div>
                </div>
                <div className="w-[300px]">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' className='my-2 p-2 w-[245px] lg:w-[254px]' style={{ background: theme.bgg }} value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type="email" placeholder='Email' className='my-2 p-2 w-[245px] lg:w-[254px]' style={{ background: theme.bgg }} value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="text" placeholder='Subject' className='my-2 p-2 w-[245px] lg:w-[254px]' style={{ background: theme.bgg }} value={subject} onChange={(e) => setSubject(e.target.value)} required />
                        <textarea cols="30" rows="5" placeholder='Message' className='my-2 p-2' style={{ background: theme.bgg }} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <div className="flex w-[80%] justify-between">
                            <button type="submit" className='py-2 px-1 rounded' style={{ background: theme.ui }}>
                                SEND MESSAGE
                            </button>
                            <div className="p-2 rounded" style={confirm ? {border: `1px solid ${theme.ui}`} : {border: 'none'}} onChange={(e) => setConfirm(e.target.value)}>{confirm}</div>
                            {/* <button type="reset" onClick={console.log('hello')} className='py-2 px-1 rounded' style={{ background: theme.ui }}>
                                CLEAR MESSAGE
                            </button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact