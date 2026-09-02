import { AiFillGithub, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { FaMedium, FaXTwitter } from 'react-icons/fa6'
import { FiFacebook, FiLinkedin } from 'react-icons/fi'
import { LiaTelegramPlane } from 'react-icons/lia'
import { PiWhatsappLogoDuotone } from 'react-icons/pi'
import SectionHeader from '../components/SectionHeader'
import { FadeUp, SlideInLeft } from '../components/Reveal'
import { useTheme } from '../hooks/useTheme'
import { personalInfo } from '../data/portfolio'

const socialLinks = [
  { href: 'https://twitter.com/emmy_ak7', icon: FaXTwitter, label: 'Twitter' },
  { href: 'https://web.facebook.com/ayomide.akintan.357/', icon: FiFacebook, label: 'Facebook' },
  { href: 'https://www.instagram.com/emmy_akintz/', icon: AiOutlineInstagram, label: 'Instagram' },
  { href: personalInfo.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'http://t.me/EmmyAkints', icon: LiaTelegramPlane, label: 'Telegram' },
  { href: 'http://wa.me/+2348167659926', icon: PiWhatsappLogoDuotone, label: 'WhatsApp' },
  { href: personalInfo.github, icon: AiFillGithub, label: 'GitHub' },
  { href: 'https://medium.com/@emzyakints2005', icon: FaMedium, label: 'Medium' },
]

function Contact() {
  const { theme } = useTheme()

  return (
    <section id="contact" className="mt-12">
      <SectionHeader label="GET IN TOUCH" title="CONTACT" />
      <div className="w-[300px]">
        <div className="flex justify-between w-[90%] my-8">
          <SlideInLeft>
            <div className="w-[50px] p-4" style={{ background: theme.ui }}>
              <AiOutlineMail />
            </div>
          </SlideInLeft>
          <SlideInLeft>
            <div className="flex items-center w-[200px]">{personalInfo.email}</div>
          </SlideInLeft>
        </div>
        <div className="flex justify-between w-[90%] my-8">
          <SlideInLeft>
            <div className="w-[50px] p-4" style={{ background: theme.ui }}>
              <IoLocationOutline />
            </div>
          </SlideInLeft>
          <SlideInLeft>
            <div className="flex items-center w-[200px]">{personalInfo.location}</div>
          </SlideInLeft>
        </div>
        <div className="flex justify-between w-[90%] my-8">
          <SlideInLeft>
            <div className="w-[50px] p-4" style={{ background: theme.ui }}>
              <AiOutlinePhone />
            </div>
          </SlideInLeft>
          <SlideInLeft>
            <div className="flex items-center w-[200px]">{personalInfo.phone}</div>
          </SlideInLeft>
        </div>
        <div className="flex justify-between w-[80%]">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <FadeUp key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon />
              </a>
            </FadeUp>
          ))}
        </div>
        <br />
        <FadeUp>
          <a
            href={`mailto:${personalInfo.email}`}
            className="py-4 px-2 cursor-pointer inline-block"
            style={{ background: theme.ui }}
          >
            SEND MESSAGE
          </a>
        </FadeUp>
      </div>
    </section>
  )
}

export default Contact
