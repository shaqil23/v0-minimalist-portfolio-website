"use client"

import { useState } from "react"
import { Menu, X, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => setIsOpen(!isOpen)
  const closeNav = () => setIsOpen(false)

  // In a real implementation, this would point to an actual file
  const resumeUrl = "/files/john-doe-resume.pdf"

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
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
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 h-full w-3/4 bg-background p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">JD</span>
                <Button variant="ghost" size="icon" onClick={closeNav}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="mt-8">
                <ul className="space-y-6">
                  {navItems.map((item) => (
                    <motion.li key={item.href} whileHover={{ x: 5 }} className="border-b border-border pb-2">
                      <a href={item.href} className="block text-lg font-medium" onClick={closeNav}>
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li whileHover={{ x: 5 }} className="pt-4">
                    <a
                      href={resumeUrl}
                      download="John_Doe_Resume.pdf"
                      className="flex items-center text-lg font-medium"
                      onClick={closeNav}
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </a>
                  </motion.li>
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
