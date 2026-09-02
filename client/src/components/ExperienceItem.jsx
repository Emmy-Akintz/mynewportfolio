import { FadeUp, SlideInLeft, SlideInRight } from './Reveal'
import { useTheme } from '../hooks/useTheme'

export default function ExperienceItem({ company, role, period, location, highlights, link }) {
  const { theme } = useTheme()

  return (
    <div className="w-[280px] md:w-[650px] lg:w-[610px] mb-8">
      <div className="flex justify-between w-full">
        <SlideInLeft>
          <h3 className="font-bold text-xl">{company}</h3>
        </SlideInLeft>
        <SlideInRight>
          <p className="text-sm">{period}</p>
        </SlideInRight>
      </div>
      <div className="flex justify-between w-full">
        <SlideInLeft>
          <p className="italic text-sm" style={{ color: theme.ui }}>
            {role}
          </p>
        </SlideInLeft>
        <SlideInRight>
          <p className="text-sm">{location}</p>
        </SlideInRight>
      </div>
      <FadeUp>
        <ul className="mt-2 text-justify list-disc pl-5 space-y-1">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {link && (
          <p className="mt-2">
            <a href={link.href} style={{ color: theme.ui }} className="italic text-sm underline">
              {link.label}
            </a>
          </p>
        )}
      </FadeUp>
    </div>
  )
}
