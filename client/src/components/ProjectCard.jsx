import { AiFillGithub, AiOutlineEye } from 'react-icons/ai'
import { SlideInLeft, SlideInRight } from './Reveal'
import { useTheme } from '../hooks/useTheme'

export default function ProjectCard({ project, index }) {
  const { theme } = useTheme()
  const Animation = index % 2 === 0 ? SlideInLeft : SlideInRight

  return (
    <Animation>
      <article
        className="card w-[280px] my-4 p-4 rounded"
        style={{ background: theme.ui }}
      >
        <p className="font-bold text-gray-900">{project.title}</p>
        <p className="text-sm text-gray-800">{project.subtitle}</p>
        <p className="text-xs mt-1 text-gray-700">{project.period}</p>
        <p className="text-sm mt-3 text-gray-900">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded"
              style={{ background: theme.bgg, color: theme.syntax }}
            >
              {tech}
            </span>
          ))}
        </div>
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-2 mt-4">
            {project.liveUrl && (
              <a
                className="rounded-xl px-2 py-1"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                style={{ background: theme.bgg }}
                aria-label={`View ${project.title} live`}
              >
                <AiOutlineEye />
              </a>
            )}
            {project.githubUrl && (
              <a
                className="rounded-xl px-2 py-1"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                style={{ background: theme.bgg }}
                aria-label={`View ${project.title} on GitHub`}
              >
                <AiFillGithub />
              </a>
            )}
          </div>
        )}
      </article>
    </Animation>
  )
}
