import cv from '../assets/AyomideAkintanCV.pdf'
import { MdDownload } from 'react-icons/md'
import { FadeUp } from '../components/Reveal'
import { useTheme } from '../hooks/useTheme'
import { personalInfo } from '../data/portfolio'

function Intro() {
  const { theme } = useTheme()

  return (
    <section id="home" className="Intro text-center lg:text-left m-auto lg:ml-0 h-[100vh]">
      <FadeUp>
        <h1 className="mt-[100px] font-bold text-4xl text-white-200">Hi</h1>
      </FadeUp>
      <FadeUp>
        <h1 className="mt-3 font-bold text-3xl lg:text-4xl">I&apos;m {personalInfo.alias}</h1>
      </FadeUp>
      <br />
      <FadeUp>
        <p className="w-[300px] md:w-[500px] lg:w-[500px] m-auto lg:ml-0 text-left">
          {personalInfo.tagline}
        </p>
      </FadeUp>
      <br />
      <FadeUp>
        <a href={cv} download="Ayomide-Akintan-CV" target="_blank" rel="noreferrer">
          <button
            type="button"
            className="flex w-[140px] justify-between rounded p-2 m-auto lg:ml-0 items-center"
            style={{ border: `1px solid ${theme.ui}` }}
          >
            Download CV <MdDownload />
          </button>
        </a>
      </FadeUp>
    </section>
  )
}

export default Intro
