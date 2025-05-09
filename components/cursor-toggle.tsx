"use client"

import { useState, useEffect } from "react"
import { MousePointer, MouseOffIcon as MousePointerOff } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CursorToggle() {
  const [isCustomCursorEnabled, setIsCustomCursorEnabled] = useState(true)

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Check if we're on a touch device
      if (window.matchMedia("(pointer: coarse)").matches) {
        setIsCustomCursorEnabled(false)
        return
      }

      // Apply or remove the custom-cursor class based on state
      if (isCustomCursorEnabled) {
        document.body.classList.add("custom-cursor")
      } else {
        document.body.classList.remove("custom-cursor")
      }
    }
  }, [isCustomCursorEnabled])

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={() => setIsCustomCursorEnabled(!isCustomCursorEnabled)}
      title={isCustomCursorEnabled ? "Disable custom cursor" : "Enable custom cursor"}
    >
      {isCustomCursorEnabled ? <MousePointer className="h-4 w-4" /> : <MousePointerOff className="h-4 w-4" />}
      <span className="sr-only">{isCustomCursorEnabled ? "Disable custom cursor" : "Enable custom cursor"}</span>
    </Button>
  )
}
