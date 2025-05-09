"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxBackgroundProps {
  className?: string
}

export function ParallaxBackground({ className = "" }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -450])

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
        style={{ y: y3 }}
      />
    </div>
  )
}
