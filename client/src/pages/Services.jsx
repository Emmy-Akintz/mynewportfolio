import { BiCodeAlt } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import SectionHeader from '../components/SectionHeader'
import { SlideInLeft, SlideInRight } from '../components/Reveal'
import { useTheme } from '../hooks/useTheme'
import { services } from '../data/portfolio'

function Services() {
  const { theme } = useTheme()

  return (
    <section id="services" className="mt-12">
      <SectionHeader label="WHAT I DO" title="HERE ARE SOME OF MY EXPERTISE" />
      <div className="md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 w-[280px] md:w-[650px] lg:w-[610px]">
        {services.map((service, index) => {
          const Slide = index % 2 === 0 ? SlideInLeft : SlideInRight
          return (
            <div
              key={service.title}
              className="card p-5 w-[280px] mt-20"
              style={{
                borderBottom: `3px solid ${theme.ui}`,
                boxShadow: `0px -20px 50px 20px ${theme.bgg}`,
              }}
            >
              <Slide>
                <IconContext.Provider value={{ color: theme.ui }}>
                  <BiCodeAlt />
                </IconContext.Provider>
                <p className="mt-4 font-bold">{service.title}</p>
                <p className="mt-2 text-sm">{service.description}</p>
              </Slide>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
