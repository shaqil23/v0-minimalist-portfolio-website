"use client"

import { useEffect } from "react"
import { useCursor } from "@/context/cursor-context"

type CursorType = "default" | "text" | "link" | "button" | "image" | "none"

export function useCursorInteraction(type: CursorType) {
  const { setCursorType } = useCursor()

  useEffect(() => {
    const handleMouseEnter = () => setCursorType(type)
    const handleMouseLeave = () => setCursorType("default")

    return () => {
      handleMouseLeave()
    }
  }, [setCursorType, type])

  return {
    onMouseEnter: () => setCursorType(type),
    onMouseLeave: () => setCursorType("default"),
  }
}
