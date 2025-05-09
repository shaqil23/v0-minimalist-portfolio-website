"use client"

import { forwardRef } from "react"
import { Button as BaseButton, type ButtonProps } from "@/components/ui/button"
import { CursorAware } from "@/components/cursor-aware"

const ButtonCursor = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <CursorAware cursorType="button">
        <BaseButton className={className} variant={variant} size={size} asChild={asChild} ref={ref} {...props} />
      </CursorAware>
    )
  },
)
ButtonCursor.displayName = "ButtonCursor"

export { ButtonCursor }
