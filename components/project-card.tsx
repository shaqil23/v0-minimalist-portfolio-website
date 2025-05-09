"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link?: string
}

export function ProjectCard({ title, description, tags, imageUrl, link = "#" }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="h-full">
      <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
        <Link href={link} className="block overflow-hidden">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>
        <CardContent className="p-4 flex-grow">
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 p-4 pt-0">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
