import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolio'

function Work() {
  return (
    <section id="work" className="mt-12">
      <SectionHeader label="MY WORK" title="RECENT PROJECTS" />
      <div className="md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 w-[280px] md:w-[650px] lg:w-[650px]">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Work
