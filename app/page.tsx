"use client"

import Image from "next/image"
import { Github, Mail, Linkedin, Phone } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredList } from "@/components/staggered-list"
import { MobileNav } from "@/components/mobile-nav"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { ParallaxElement } from "@/components/parallax-element"
import { ParallaxBackground } from "@/components/parallax-background"
import { ResumeButton } from "@/components/resume-button"
import { ResumeSection } from "@/components/resume-section"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollIndicator />

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ opacity: headerOpacity }}
        className="fixed top-0 z-10 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold">
            SQL
          </motion.div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <motion.li whileHover={{ y: -2 }}>
                <a href="#home" className="text-sm font-medium hover:text-primary">
                  Home
                </a>
              </motion.li>
              <motion.li whileHover={{ y: -2 }}>
                <a href="#about" className="text-sm font-medium hover:text-primary">
                  About
                </a>
              </motion.li>
              <motion.li whileHover={{ y: -2 }}>
                <a href="#projects" className="text-sm font-medium hover:text-primary">
                  Projects
                </a>
              </motion.li>
              <motion.li whileHover={{ y: -2 }}>
                <a href="#contact" className="text-sm font-medium hover:text-primary">
                  Contact
                </a>
              </motion.li>
              <motion.li whileHover={{ y: -2 }}>
                <a href="/resume" className="text-sm font-medium hover:text-primary">
                  Resume
                </a>
              </motion.li>
            </ul>
          </nav>
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <div className="hidden md:flex md:items-center md:space-x-3">
              <motion.div whileHover={{ rotate: 5, scale: 1.1 }}>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://github.com/shaqil23" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ rotate: -5, scale: 1.1 }}>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a
                    href="https://www.linkedin.com/in/shakil-mardhika-azhar-785643190"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </motion.div>
            </div>
            <MobileNav />
          </div>
        </div>
      </motion.header>

      <main>
        {/* Hero Section with Parallax */}
        <section
          id="home"
          className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-16 overflow-hidden"
        >
          <ParallaxBackground />

          <div className="container flex flex-col items-center text-center z-10">
            <ParallaxElement speed={0.2} direction="up" offset={[-20, 20]}>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mb-8 overflow-hidden rounded-full border-4 border-border p-1"
              >
                <Image
                  src="/images/profile.jpeg"
                  alt="Profile"
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                  priority
                />
              </motion.div>
            </ParallaxElement>

            <ParallaxElement speed={0.3} direction="up" offset={[-30, 30]}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Shaqil Mardhika Azhar
              </motion.h1>
            </ParallaxElement>

            <ParallaxElement speed={0.4} direction="up" offset={[-40, 40]}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="mb-6 text-lg text-muted-foreground sm:text-xl md:text-2xl"
              >
                Junior Data Analyst
              </motion.h2>
            </ParallaxElement>

            <ParallaxElement speed={0.5} direction="up" offset={[-50, 50]}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="mx-auto mb-8 max-w-lg px-4 text-muted-foreground"
              >
                As an early-career data analyst, I support data-driven decisions by analyzing datasets and creating
                clear visualizations that turn information into useful insights.
              </motion.p>
            </ParallaxElement>

            <ParallaxElement speed={0.6} direction="up" offset={[-60, 60]}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild>
                    <a href="#projects">View My Work</a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" asChild>
                    <a href="#contact">Get In Touch</a>
                  </Button>
                </motion.div>
                <ResumeButton />
              </motion.div>
            </ParallaxElement>
          </div>
        </section>

        {/* About Section with Parallax */}
        <section id="about" className="relative py-16 md:py-20 overflow-hidden">
          <div className="container px-4 md:px-6">
            <ParallaxElement speed={0.2} direction="up" offset={[-20, 20]}>
              <AnimatedSection>
                <h2 className="mb-10 md:mb-12 text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  About Me
                </h2>
              </AnimatedSection>
            </ParallaxElement>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <ParallaxElement speed={0.3} direction="left" offset={[-30, 30]}>
                <AnimatedSection delay={0.1}>
                  <h3 className="mb-4 text-xl font-semibold">My Background</h3>
                  <p className="mb-4 text-muted-foreground">
                    I'm a data analyst in the making with a deep curiosity for uncovering insights through data. As an
                    Informatics Engineering student, I've built a strong foundation in analytics using Python, SQL, and
                    Excel—and I'm constantly pushing myself to learn more.
                  </p>
                  <p className="text-muted-foreground">
                    Driven by a passion for solving real-world problems, I've worked on academic and personal projects
                    that involve cleaning messy data, building dashboards, and turning numbers into stories. I'm eager
                    to grow, contribute, and make an impact through data.
                  </p>
                </AnimatedSection>
              </ParallaxElement>

              <ParallaxElement speed={0.3} direction="right" offset={[-30, 30]}>
                <AnimatedSection delay={0.2}>
                  <h3 className="mb-4 text-xl font-semibold">My Skills</h3>
                  <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="rounded-md border border-border p-3">
                      <p className="font-medium">Data Analysis</p>
                      <p className="text-sm text-muted-foreground">SQL, Python, Excel</p>
                    </div>
                    <div className="rounded-md border border-border p-3">
                      <p className="font-medium">Visualization</p>
                      <p className="text-sm text-muted-foreground">Tableau, Power BI</p>
                    </div>
                    <div className="rounded-md border border-border p-3">
                      <p className="font-medium">Statistics</p>
                      <p className="text-sm text-muted-foreground">Regression, K-Means, ML</p>
                    </div>
                    <div className="rounded-md border border-border p-3">
                      <p className="font-medium">Tools</p>
                      <p className="text-sm text-muted-foreground">Git, Jupyter, Google Colab</p>
                    </div>
                  </StaggeredList>
                </AnimatedSection>
              </ParallaxElement>
            </div>

            {/* Resume Section */}
            <div className="mx-auto max-w-4xl mt-12">
              <ParallaxElement speed={0.3} direction="up" offset={[-30, 30]}>
                <AnimatedSection delay={0.3}>
                  <ResumeSection />
                </AnimatedSection>
              </ParallaxElement>
            </div>
          </div>
        </section>

        {/* Projects Section with Parallax */}
        <section id="projects" className="relative bg-muted/30 py-16 md:py-20 overflow-hidden">
          <div className="container px-4 md:px-6">
            <ParallaxElement speed={0.2} direction="up" offset={[-20, 20]}>
              <AnimatedSection>
                <h2 className="mb-10 md:mb-12 text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  My Projects
                </h2>
              </AnimatedSection>
            </ParallaxElement>

            <StaggeredList className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ParallaxElement speed={0.3} direction="up" offset={[-30, 30]}>
                <ProjectCard
                  title="Sales Forecasting Model"
                  description="Developed a predictive model using time series analysis that improved forecast accuracy by 35%, enabling better inventory management and reducing costs."
                  tags={["Python", "Prophet", "Pandas", "Scikit-learn"]}
                  imageUrl="/placeholder.svg?height=400&width=600"
                />
              </ParallaxElement>

              <ParallaxElement speed={0.4} direction="up" offset={[-40, 40]}>
                <ProjectCard
                  title="Customer Segmentation Dashboard"
                  description="Created an interactive dashboard that visualized customer segments based on purchasing behavior, demographics, and engagement metrics."
                  tags={["Tableau", "SQL", "K-means Clustering"]}
                  imageUrl="/placeholder.svg?height=400&width=600"
                />
              </ParallaxElement>

              <ParallaxElement speed={0.5} direction="up" offset={[-50, 50]}>
                <ProjectCard
                  title="Marketing ROI Analysis"
                  description="Analyzed multi-channel marketing data to optimize campaign spending, resulting in a 25% increase in ROI and improved attribution modeling."
                  tags={["R", "Google Analytics", "Statistical Modeling"]}
                  imageUrl="/placeholder.svg?height=400&width=600"
                />
              </ParallaxElement>
            </StaggeredList>
          </div>
        </section>

        {/* Contact Section with Parallax */}
        <section id="contact" className="relative py-16 md:py-20 overflow-hidden">
          <div className="container px-4 md:px-6">
            <ParallaxElement speed={0.2} direction="up" offset={[-20, 20]}>
              <AnimatedSection>
                <h2 className="mb-10 md:mb-12 text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  Get In Touch
                </h2>
              </AnimatedSection>
            </ParallaxElement>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <ParallaxElement speed={0.3} direction="left" offset={[-30, 30]}>
                <AnimatedSection delay={0.1}>
                  <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
                  <StaggeredList className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <a href="mailto:mardhikazhar@gmail.com" className="hover:text-primary transition-colors">
                        mardhikazhar@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <a href="tel:087878181633" className="hover:text-primary transition-colors">
                        087878181633
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Github className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="https://github.com/shaqil23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        github.com/shaqil23
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Linkedin className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="https://www.linkedin.com/in/shakil-mardhika-azhar-785643190"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        linkedin.com/shakil-mardhika-azhar
                      </a>
                    </div>
                  </StaggeredList>
                  <div className="mt-8">
                    <h3 className="mb-4 text-xl font-semibold">Let's Connect</h3>
                    <p className="text-muted-foreground">
                      I'm currently available for entry-level data analyst positions and internships. If you have data
                      challenges that need a fresh perspective or are looking for a motivated junior analyst, feel free
                      to reach out.
                    </p>
                  </div>
                </AnimatedSection>
              </ParallaxElement>

              <ParallaxElement speed={0.3} direction="right" offset={[-30, 30]}>
                <AnimatedSection delay={0.2}>
                  <ContactForm />
                </AnimatedSection>
              </ParallaxElement>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="container text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Shaqil Mardhika Azhar. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
