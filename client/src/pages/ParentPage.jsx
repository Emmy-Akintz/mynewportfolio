import { useContext, useState, useEffect, useRef } from 'react'
import Sidebar from '../components/Sidebar'
import { MdMenu, MdCancel } from 'react-icons/md'
import { ThemeContext } from '../contexts/ThemeContextValue'
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
  const [activeSection, setActiveSection] = useState('')
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClose = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setSidebar(false)
      }
    }

    document.addEventListener('mousedown', handleClose)
    document.addEventListener('scroll', handleClose)

    return () => {
      document.removeEventListener('mousedown', handleClose)
      document.removeEventListener('scroll', handleClose)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActiveSection(entry.target.id)
      },
      { threshold: 0.5 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div
      className="lg:flex justify-between"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <div className="fixed top-[10px] right-[10px]">
        <div className="lg:hidden p-4">
          <FadeUp>
            <button
              type="button"
              className={sidebar ? 'hidden' : 'block z-40 animate-pulse'}
              onClick={() => setSidebar(true)}
              aria-label="Open menu"
            >
              <MdMenu />
            </button>
            <button
              type="button"
              className={sidebar ? 'block z-40 animate-pulse' : 'hidden'}
              onClick={() => setSidebar(false)}
              aria-label="Close menu"
            >
              <MdCancel />
            </button>
          </FadeUp>
        </div>
        <FadeUp>
          <ToggleTheme />
        </FadeUp>
      </div>
      <div
        className={sidebar ? 'visible absolute' : 'invisible md:invisible lg:visible'}
        style={{ zIndex: 40 }}
        ref={menuRef}
      >
        <Sidebar activeSection={activeSection} />
      </div>
      <main className={`p-12 w-[350px] md:w-[80%] lg:w-[70%] ${sidebar ? 'mix-blend-overlay overflow-hidden' : ''}`}>
        <Intro />
        <About />
        <Services />
        <Skills />
        <Education />
        <Experience />
        <Work />
        <Read />
        <Contact />
      </main>
    </div>
  )
}

export default ParentPage
