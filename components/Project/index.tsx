'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A seamless networking platform for digital growth and connectivity.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Next.js", "TailwindCSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Project Two",
    description: "Intuitive design system with cutting-edge features and unparalleled support.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["TypeScript", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Project Three",
    description: "Enterprise-grade solution for seamless integration and scalability.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Django", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
]

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-12 bg-[#1F2937]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Finished Projects
          </h2>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our latest work and see how we empower connections through technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-lg border-2 transition-all duration-300 bg-[#2D3748] ${
                hoveredIndex === index ? 'border-blue-500' : 'border-transparent'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

