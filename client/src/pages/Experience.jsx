import SectionHeader from '../components/SectionHeader'
import ExperienceItem from '../components/ExperienceItem'
import { experiences } from '../data/portfolio'

function Experience() {
  return (
    <section id="experience" className="mt-12">
      <SectionHeader label="EXPERIENCE" title="PROFESSIONAL WORK EXPERIENCE" />
      {experiences.map((exp) => (
        <ExperienceItem key={`${exp.company}-${exp.period}`} {...exp} />
      ))}
    </section>
  )
}

export default Experience
