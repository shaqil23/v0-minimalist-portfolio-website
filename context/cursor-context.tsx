"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type CursorType = "default" | "text" | "link" | "button" | "image" | "none"

interface CursorContextType {
  cursorType: CursorType
  setCursorType: (type: CursorType) => void
}

const CursorContext = createContext<CursorContextType>({
  cursorType: "default",
  setCursorType: () => {},
})

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorType, setCursorType] = useState<CursorType>("default")

  return <CursorContext.Provider value={{ cursorType, setCursorType }}>{children}</CursorContext.Provider>
}

export function useCursor() {
  return useContext(CursorContext)
}
