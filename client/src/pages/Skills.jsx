import SectionHeader from '../components/SectionHeader'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Reveal'
import { useTheme } from '../hooks/useTheme'
import { skillCategories } from '../data/portfolio'

function Skills() {
  const { theme } = useTheme()

  return (
    <section id="skills" className="mt-12">
      <SectionHeader label="MY SPECIALTY" title="MY SKILLS" />
      <FadeUp>
        <p className="w-[280px] md:w-[650px] lg:w-[610px] text-justify">
          I work across the full stack — from React Native mobile apps with offline-first sync to
          Next.js web platforms backed by Node.js APIs. Here&apos;s what I use day to day.
        </p>
      </FadeUp>
      <br />
      <div className="w-[280px] md:w-[650px] lg:w-[650px] space-y-6">
        {skillCategories.map((group, index) => {
          const Slide = index % 2 === 0 ? SlideInLeft : SlideInRight
          return (
            <Slide key={group.category}>
              <div>
                <h3 className="font-bold mb-2" style={{ color: theme.ui }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ background: theme.bgg, border: `1px solid ${theme.ui}` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Slide>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
