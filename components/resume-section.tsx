"use client"

import { motion } from "framer-motion"
import { FileText, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ResumeButton } from "@/components/resume-button"
import Link from "next/link"

export function ResumeSection() {
  // In a real implementation, these would point to actual files
  const resumeUrl = "/files/shaqil-azhar-resume.pdf"
  const resumePreviewUrl = "/resume"

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-primary/10 p-3">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">My Resume</h3>
              <p className="text-sm text-muted-foreground">Updated May 2025</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="sm" asChild>
                <Link href={resumePreviewUrl}>
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Link>
              </Button>
            </motion.div>
            <ResumeButton variant="default" size="sm" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
