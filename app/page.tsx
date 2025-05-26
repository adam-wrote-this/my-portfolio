import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Mail, Linkedin, Twitter, ArrowRight, Code, Palette, Zap } from "lucide-react"
import Image from "next/image"

export default function Showcase() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool for blogs, social media, and marketing copy using OpenAI API.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "OpenAI", "TailwindCSS", "Vercel"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with forecasts, maps, and location-based weather alerts.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Vue.js", "Weather API", "Chart.js", "PWA"],
      github: "#",
      demo: "#",
    },
  ]

  const skills = [
    { name: "Frontend", icon: Code, items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vue.js"] },
    { name: "Backend", icon: Zap, items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"] },
    { name: "Design", icon: Palette, items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Prototyping"] },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Portfolio</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-foreground/80">
                About
              </a>
              <a href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </a>
              <a href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </a>
              <a href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Building Digital Experiences
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.
          </p>
          <div className="flex gap-4 mt-6">
            <Button size="lg">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">About Me</h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            I'm a passionate full-stack developer with 5+ years of experience creating web applications. I love turning
            complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you'll find me
            exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">Featured Projects</h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-2 mt-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="pb-4">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="flex-1 mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">Skills & Technologies</h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            I work with a variety of technologies to bring ideas to life.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
          {skills.map((skill, index) => (
            <Card key={index}>
              <CardHeader className="text-center">
                <skill.icon className="mx-auto h-12 w-12 mb-2" />
                <CardTitle>{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">Let's Work Together</h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            I'm always interested in new opportunities and exciting projects. Let's connect!
          </p>
          <div className="flex gap-4 mt-6">
            <Button size="lg" asChild>
              <a href="mailto:hello@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js and shadcn/ui. © 2024 All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="#">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
