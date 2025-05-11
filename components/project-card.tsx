"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link?: string
}

export function ProjectCard({ title, description, tags, imageUrl, link = "#" }: ProjectCardProps) {
  const isGitHubLink = link.includes("github.com")

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="h-full">
      <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4 flex-grow">
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="flex flex-col p-4 pt-0 space-y-4">
          <div className="flex flex-wrap gap-2 w-full">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
          {link && link !== "#" && (
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                {isGitHubLink ? <Github className="mr-2 h-4 w-4" /> : <ExternalLink className="mr-2 h-4 w-4" />}
                {isGitHubLink ? "View on GitHub" : "View Project"}
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
