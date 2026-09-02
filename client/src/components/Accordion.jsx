import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { SlideInLeft, SlideInRight } from './Reveal'
import { useTheme } from '../hooks/useTheme'

function AccordionItem({ item, isOpen, onToggle, slideDirection = 'left' }) {
  const { theme } = useTheme()
  const Slide = slideDirection === 'right' ? SlideInRight : SlideInLeft

  return (
    <Slide>
      <div className="block mt-1">
        <button
          type="button"
          onClick={onToggle}
          className="w-[280px] md:w-[650px] lg:w-[610px] p-2 rounded flex justify-between items-center cursor-pointer text-left"
          style={{ background: theme.ui }}
          aria-expanded={isOpen}
        >
          <span className="text-md font-bold text-gray-900">{item.title}</span>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        <div
          className={`${
            isOpen
              ? 'border p-2 rounded w-[280px] md:w-[650px] lg:w-[610px] mt-1 transition-opacity duration-500 ease-in-out'
              : 'h-0 overflow-hidden'
          }`}
          style={{ opacity: isOpen ? 1 : 0 }}
        >
          {item.content}
          {item.link && (
            <>
              {' '}
              <a href={item.link.href} style={{ color: theme.ui }} className="underline">
                {item.link.label}
              </a>
            </>
          )}
        </div>
      </div>
    </Slide>
  )
}

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={item.title}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          slideDirection={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  )
}
