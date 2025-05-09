"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full overflow-hidden border-border"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div className="relative h-4 w-4">
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 45 : 0,
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Sun className="h-4 w-4 text-amber-500" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : -45,
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Moon className="h-4 w-4 text-slate-300" />
        </motion.div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
