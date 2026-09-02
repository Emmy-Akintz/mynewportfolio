import { useEffect, useRef, useContext, type ReactNode } from 'react'
import { motion, useInView, useAnimation, type Variants } from 'framer-motion'
import { ThemeContext } from '../contexts/ThemeContextValue'

const slideOverlayVariants = {
  hidden: { left: 0 },
  visible: { left: '100%' },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
}

const slideLeftVariants = {
  hidden: { opacity: 0, x: -75 },
  visible: { opacity: 1, x: 0 },
}

const slideRightVariants = {
  hidden: { opacity: 0, x: 75 },
  visible: { opacity: 1, x: 0 },
}

interface RevealWrapperProps {
  children: ReactNode
  width?: 'fit-content' | '100%'
  contentVariants: Variants
}

interface RevealProps {
  children: ReactNode
  width?: 'fit-content' | '100%'
}

function RevealWrapper({ children, width = 'fit-content', contentVariants }: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false })
  const mainControls = useAnimation()
  const slideControls = useAnimation()
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark

  useEffect(() => {
    const state = isInView ? 'visible' : 'hidden'
    mainControls.start(state)
    slideControls.start(state)
  }, [isInView, mainControls, slideControls])

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={slideOverlayVariants}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: theme.ui,
          zIndex: 20,
        }}
      />
    </div>
  )
}

export function FadeUp({ children, width = 'fit-content' }: RevealProps) {
  return (
    <RevealWrapper width={width} contentVariants={fadeUpVariants}>
      {children}
    </RevealWrapper>
  )
}

export function SlideInLeft({ children, width = 'fit-content' }: RevealProps) {
  return (
    <RevealWrapper width={width} contentVariants={slideLeftVariants}>
      {children}
    </RevealWrapper>
  )
}

export function SlideInRight({ children, width = 'fit-content' }: RevealProps) {
  return (
    <RevealWrapper width={width} contentVariants={slideRightVariants}>
      {children}
    </RevealWrapper>
  )
}
