"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useParallax } from "@/hooks/use-parallax"

interface ParallaxElementProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  offset?: [number, number]
}

export function ParallaxElement({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  offset = [-50, 50],
}: ParallaxElementProps) {
  const { ref, transform } = useParallax({ speed, direction, offset })

  return (
    <motion.div ref={ref} style={{ transform }} className={className}>
      {children}
    </motion.div>
  )
}
