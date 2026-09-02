import SectionHeader from '../components/SectionHeader'
import { FadeUp } from '../components/Reveal'
import { personalInfo } from '../data/portfolio'

function About() {
  return (
    <section id="about" className="About">
      <SectionHeader label="ABOUT ME" title="WHO I AM?" />
      <FadeUp>
        <p className="mt-12 w-[280px] md:w-[650px] lg:w-[610px]">{personalInfo.about}</p>
      </FadeUp>
      <br />
      <FadeUp>
        <p className="w-[280px] md:w-[650px] lg:w-[610px] mt-4">
          Currently building at <strong>GE-Mart</strong> (mobile) and shipping{' '}
          <strong>Jonjer</strong> and <strong>Taskipline</strong> as full-stack products. Previously
          at <strong>DotCircle Labs</strong> and <strong>Toraaah</strong> across web and mobile.
        </p>
      </FadeUp>
    </section>
  )
}

export default About
