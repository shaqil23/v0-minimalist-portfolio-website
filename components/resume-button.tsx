"use client"

import { Download } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ResumeButtonProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function ResumeButton({ variant = "outline", size = "default", className = "" }: ResumeButtonProps) {
  // In a real implementation, this would point to an actual file
  const resumeUrl = "/files/shaqil-azhar-resume.pdf"

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button variant={variant} size={size} className={className} asChild>
        <a href={resumeUrl} download="Shaqil_Azhar_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </a>
      </Button>
    </motion.div>
  )
}
