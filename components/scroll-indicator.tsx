"use client"

import { useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the indicator after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Show the scroll to top button after scrolling down more
      if (window.scrollY > window.innerHeight) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent"
        style={{ opacity: isVisible ? 1 : 0 }}
        transition={{ opacity: { duration: 0.3 } }}
      >
        <motion.div className="h-full bg-primary origin-left" style={{ scaleX: scrollYProgress }} />
      </motion.div>

      {/* Scroll to top button without percentage */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showScrollToTop ? 1 : 0,
          scale: showScrollToTop ? 1 : 0.8,
          y: showScrollToTop ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={scrollToTop}
          className="flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md p-3 hover:bg-primary/90 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Scroll to top</span>
        </motion.button>
      </motion.div>
    </>
  )
}
