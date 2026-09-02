import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { navLinks, personalInfo } from '../data/portfolio'
import image from '../assets/CV-pic.jpg'

function NavItem({ id, label, isActive }) {
  const { theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <li
      className="text-sm mt-1 font-bold rounded-xl"
      style={{
        color: isActive ? theme.ui : undefined,
        fontSize: isHovered ? '16px' : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={`#${id}`}>{label}</a>
    </li>
  )
}

function Sidebar({ activeSection }) {
  const { theme } = useTheme()

  return (
    <aside
      className="Sidebar p-10 fixed h-[100vh] md:ml-8 lg:ml-10 w-[300px] text-center overflow-y-scroll"
      style={{ background: theme.bgg, color: theme.syntax }}
    >
      <div className="image w-[200px] h-[200px] m-auto">
        <img src={image} alt={personalInfo.name} className="rounded-full object-cover w-full h-full" />
      </div>
      <br />
      <h1 className="font-bold text-2xl">{personalInfo.name}</h1>
      <p className="text-sm">
        <span style={{ color: theme.ui }}>{personalInfo.title.toUpperCase()}</span> IN NIGERIA
      </p>
      <ul className="mt-4">
        {navLinks.map((link) => (
          <NavItem
            key={link.id}
            id={link.id}
            label={link.label}
            isActive={activeSection === link.id}
          />
        ))}
      </ul>
      <p className="text-sm mt-4">&copy; Copyright 2026.</p>
      <p className="text-sm mb-10">All rights reserved.</p>
      <p className="text-xs italic">Initial creation — 2023.</p>
    </aside>
  )
}

export default Sidebar
