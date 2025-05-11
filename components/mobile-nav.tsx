"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => setIsOpen(!isOpen)
  const closeNav = () => setIsOpen(false)

  // Using the external PDF URL
  const resumeUrl = "https://pdf.ac/3WtWjt"

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ]

  return (
    <div className="md:hidden">
      <Button variant="outline" size="icon" className="rounded-full" onClick={toggleNav}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={closeNav}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 h-full w-3/4 bg-background border-l border-border shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border bg-background">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 overflow-hidden rounded-full">
                      <Image src="/images/profile.jpeg" alt="Profile" width={32} height={32} className="object-cover" />
                    </div>
                    <span className="text-xl font-bold">SQL</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a
                      href="https://github.com/shaqil23"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/shakil-mardhika-azhar-785643190"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <Button variant="ghost" size="icon" onClick={closeNav}>
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto bg-background">
                  <nav className="border-b border-border">
                    <ul>
                      {navItems.map((item) => (
                        <motion.li
                          key={item.href}
                          whileHover={{ x: 5 }}
                          className="border-b border-border last:border-b-0"
                        >
                          <a
                            href={item.href}
                            className="block p-4 text-lg font-medium hover:text-primary transition-colors bg-background"
                            onClick={closeNav}
                          >
                            {item.label}
                          </a>
                        </motion.li>
                      ))}
                      <motion.li whileHover={{ x: 5 }} className="border-b border-border last:border-b-0">
                        <a
                          href={resumeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-4 text-lg font-medium hover:text-primary transition-colors bg-background"
                          onClick={closeNav}
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Download Resume
                        </a>
                      </motion.li>
                    </ul>
                  </nav>

                  {/* Contact Section */}
                  <div className="p-4 bg-background">
                    <h3 className="text-lg font-medium border-b border-border pb-2 mb-4">Contact</h3>
                    <div className="space-y-4">
                      <a
                        href="mailto:mardhikazhar@gmail.com"
                        className="flex items-center space-x-2 text-sm hover:text-primary transition-colors py-2"
                      >
                        <Mail className="h-4 w-4" />
                        <span>mardhikazhar@gmail.com</span>
                      </a>
                      <a
                        href="https://github.com/shaqil23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm hover:text-primary transition-colors py-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>github.com/shaqil23</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/shakil-mardhika-azhar-785643190"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm hover:text-primary transition-colors py-2"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span>linkedin.com/shakil-mardhika-azhar</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
