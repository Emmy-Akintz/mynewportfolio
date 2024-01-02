import React, { useEffect, useRef, useContext } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { ThemeContext } from '../contexts/ThemeContext'

interface Props {
    children: JSX.Element
    width?: "fit-content" | "100%"
}

export const FadeUp = ({ children, width = "fit-content" }: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        console.log(isInView);
        
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        } 
        // else if (!isInView) {
        //     mainControls.stop()
        //     slideControls.stop()
        // }
    }, [isInView])

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
            variants={{
                hidden: { left: 0 },
                visible: { left: "100%" }
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: theme.ui,
                zIndex: 20
            }}
            ></motion.div>
        </div>
    )
}

export const SlideInLeft = ({ children, width = "fit-content" }: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        } 
        // else if (!isInView) {
        //     mainControls.stop()
        //     slideControls.stop()
        // }
    }, [isInView])

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
            variants={{
                hidden: { left: 0 },
                visible: { left: "100%" }
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: theme.ui,
                zIndex: 20
            }}
            ></motion.div>
        </div>
    )
}

export const SlideInRight = ({ children, width = "fit-content" }: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        } 
        // else if (!isInView) {
        //     mainControls.stop()
        //     slideControls.stop()
        // }
    }, [isInView])

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
            variants={{
                hidden: { left: 0 },
                visible: { left: "100%" }
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: theme.ui,
                zIndex: 20
            }}
            ></motion.div>
        </div>
    )
}