import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { MdMenu, MdCancel } from 'react-icons/md'
import { ThemeContext } from '../contexts/ThemeContext'
import ToggleTheme from '../components/ToggleTheme'
import Intro from './Intro'
import About from './About'
import Services from './Services'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Work from './Work'
import Read from './Read'
import Contact from './Contact'
import { FadeUp } from '../components/Reveal'

function ParentPage() {
  const [sidebar, setSidebar] = useState(false)
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark

  return (
    <div className='lg:flex justify-between' style={{ background: theme.bg, color: theme.syntax }}>
      <div className='fixed top-[10px] right-[10px]'>
        <div className="lg:hidden p-4">
          <FadeUp>
            <div className={sidebar ? 'hidden' : 'block'} onClick={() => setSidebar(true)}>
              <MdMenu />
            </div>
            <div className={sidebar ? 'block' : 'hidden'} onClick={() => setSidebar(false)}>
              <MdCancel />
            </div>
          </FadeUp>
        </div>
        <FadeUp>
          <div className="">
            <ToggleTheme />
          </div>
        </FadeUp>
      </div>
      <div className={sidebar ? 'absolute' : 'hidden md:hidden lg:block'} style={{ zIndex: 20 }}>
        <Sidebar />
      </div>
      <div className="p-12 w-[350px] md:w-[80%] lg:w-[70%]">
        <Intro />
        <About />
        <Services />
        <Skills />
        <Education />
        <Experience />
        <Work />
        <Read />
        <Contact />
      </div>
    </div>
  )
}

export default ParentPage