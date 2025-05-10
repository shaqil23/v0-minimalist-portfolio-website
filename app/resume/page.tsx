import { DetailedResume } from "@/components/detailed-resume"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  // Using the external PDF URL
  const resumeUrl = "https://pdf.ac/3WtWjt"

  return (
    <div className="container py-16 md:py-20">
      <div className="mb-8 flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
        <Button asChild>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </div>
      <DetailedResume />
    </div>
  )
}
