"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

interface StaggeredListProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggeredList({ children, className, staggerDelay = 0.1 }: StaggeredListProps) {
  const { ref, isInView } = useInView(0.1)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={item}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
