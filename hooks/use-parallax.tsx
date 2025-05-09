"use client"

import { useScroll, useTransform, type MotionValue } from "framer-motion"
import { useRef } from "react"

interface ParallaxOptions {
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  offset?: [number, number]
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = "up", offset = [-100, 100] } = options

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate the transform based on direction
  const translateY: MotionValue<number | string> = useTransform(
    scrollYProgress,
    [0, 1],
    [`translateY(${offset[0] * speed}px)`, `translateY(${offset[1] * speed}px)`],
  )
  const translateX: MotionValue<number | string> = useTransform(
    scrollYProgress,
    [0, 1],
    [`translateX(${offset[0] * speed}px)`, `translateX(${offset[1] * speed}px)`],
  )
  let transform: MotionValue<number | string>

  switch (direction) {
    case "up":
      transform = translateY
      break
    case "down":
      transform = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateY(${-offset[0] * speed}px)`, `translateY(${-offset[1] * speed}px)`],
      )
      break
    case "left":
      transform = translateX
      break
    case "right":
      transform = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateX(${-offset[0] * speed}px)`, `translateX(${-offset[1] * speed}px)`],
      )
      break
    default:
      transform = translateY
  }

  return { ref, transform }
}
