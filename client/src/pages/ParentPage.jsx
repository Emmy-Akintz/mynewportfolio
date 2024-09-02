import React, { useContext, useState, useEffect, useRef } from 'react'
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
  const [activeSection, setActiveSection] = useState("");
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark

  let menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setSidebar(false)
      }
    }

    document.addEventListener("mousedown", handler)
    document.addEventListener("scroll", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("scroll", handler)
    }
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // check if there is a new entry
        // console.log(entry);
        if (entry?.isIntersecting) setActiveSection(entry.target.id);
      },
      {
        threshold: 0.5,
      }
    );

    // observe each section
    // const refs = document.querySelectorAll("article > section[id]");
    const refs = document.querySelectorAll("div[id]");
    // console.log(refs)
    refs.forEach(ref => {
      observer.observe(ref);
    });

    // // Add scroll event listener for in-page navigation
    // const handleScroll = () => {
    //     let newActiveSection = null;
    //     refs.forEach((section) => {
    //         if (section.getBoundingClientRect().top < window.innerHeight * 0.5) {
    //         newActiveSection = section.id; // Update immediately
    //         }
    //     });
    //     setActiveSection(newActiveSection!);
    // };

    // window.addEventListener('scroll', handleScroll);

    // cleanup
    return () => {
      refs.forEach(ref => {
        observer.unobserve(ref);
      });
      // window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className='lg:flex justify-between'
      style={{
        background: theme.bg,
        color: theme.syntax,
        // '&::WebkitScrollbarThumb': { background: theme.ui }
      }}>
      <div className='fixed top-[10px] right-[10px]'>
        <div className="lg:hidden p-4">
          <FadeUp>
            <div
              className={sidebar ? 'hidden' : 'block z-40 animate-pulse'}
              onClick={() => setSidebar(true)}>
              <MdMenu />
            </div>
            <div className={sidebar ? 'block z-40 animate-pulse' : 'hidden'} onClick={() => setSidebar(false)}>
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
      <div
        className={sidebar ? 'visible absolute' : 'invisible md:invisible lg:visible'} style={{ zIndex: 40 }}
        ref={menuRef}
      >
        <Sidebar activeSection={activeSection} />
      </div>
      <div className={`p-12 w-[350px] md:w-[80%] lg:w-[70%] ${sidebar ? 'mix-blend-overlay overflow-hidden' : ''}`}>
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