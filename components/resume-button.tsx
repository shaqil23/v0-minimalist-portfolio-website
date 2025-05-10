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
  // Using a text file that will definitely be available
  const resumeUrl = "/files/shaqil-azhar-resume.txt"

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button variant={variant} size={size} className={className} asChild>
        <a href={resumeUrl} download="Shaqil_Azhar_Resume.txt" target="_blank" rel="noopener noreferrer">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </a>
      </Button>
    </motion.div>
  )
}
