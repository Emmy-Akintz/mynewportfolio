import SectionHeader from '../components/SectionHeader'
import Accordion from '../components/Accordion'
import { educationItems } from '../data/portfolio'

function Education() {
  return (
    <section id="education" className="mt-12">
      <SectionHeader label="EDUCATION" title="EDUCATION & CERTIFICATIONS" />
      <Accordion items={educationItems} />
    </section>
  )
}

export default Education
