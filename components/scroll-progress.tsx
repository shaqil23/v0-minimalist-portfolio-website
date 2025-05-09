"use client"

import { useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Only show the progress bar after scrolling down a bit
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent"
      style={{ opacity: isVisible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.3 } }}
    >
      <motion.div className="h-full bg-primary origin-left" style={{ scaleX: scrollYProgress }} />
    </motion.div>
  )
}
