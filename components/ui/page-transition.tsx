"use client"
import { motion, useReducedMotion } from "framer-motion"
import { PropsWithChildren } from "react"

export function PageTransition({ children }: PropsWithChildren) {
  const reduce = useReducedMotion()
  const variants = reduce
    ? { initial: { opacity: 1, y: 0 }, enter: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 8 }, enter: { opacity: 1, y: 0 } }

  return (
    <motion.div initial="initial" animate="enter" variants={variants}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}
