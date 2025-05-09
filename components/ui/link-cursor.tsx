"use client"

import type React from "react"

import Link from "next/link"
import { CursorAware } from "@/components/cursor-aware"

interface LinkCursorProps {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
}

export function LinkCursor({ href, children, className = "", ...props }: LinkCursorProps) {
  return (
    <CursorAware cursorType="link">
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    </CursorAware>
  )
}
