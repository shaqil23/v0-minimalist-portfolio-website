"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Use spring for smooth cursor movement
  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleElementMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable") ||
        target.closest(".clickable")

      setIsPointer(!!isClickable)
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleElementMouseEnter)

    // Hide cursor when it leaves the window
    document.documentElement.addEventListener("mouseleave", () => setIsVisible(false))
    document.documentElement.addEventListener("mouseenter", () => setIsVisible(true))

    // Add a class to the body to hide the default cursor
    document.body.classList.add("custom-cursor")

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleElementMouseEnter)
      document.documentElement.removeEventListener("mouseleave", () => setIsVisible(false))
      document.documentElement.removeEventListener("mouseenter", () => setIsVisible(true))
      document.body.classList.remove("custom-cursor")
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] h-3 w-3 rounded-full bg-primary mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Cursor ring - expands on interactive elements */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border border-primary mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          height: isPointer ? 40 : isClicking ? 16 : 24,
          width: isPointer ? 40 : isClicking ? 16 : 24,
          opacity: isPointer ? 1 : 0.6,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  )
}
