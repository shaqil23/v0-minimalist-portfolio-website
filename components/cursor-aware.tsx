"use client"

import type { ReactNode } from "react"
import { useCursor } from "@/context/cursor-context"

interface CursorAwareProps {
  children: ReactNode
  cursorType: "default" | "text" | "link" | "button" | "image" | "none"
  className?: string
}

export function CursorAware({ children, cursorType, className = "" }: CursorAwareProps) {
  const { setCursorType } = useCursor()

  return (
    <div
      className={`clickable ${className}`}
      onMouseEnter={() => setCursorType(cursorType)}
      onMouseLeave={() => setCursorType("default")}
    >
      {children}
    </div>
  )
}
