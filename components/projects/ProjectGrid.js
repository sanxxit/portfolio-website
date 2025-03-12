"use client"

import { useState } from "react"
import ProjectCard from "./ProjectCard"
import { Button } from "@/components/ui/button"

export default function ProjectGrid({ projects }) {
  const [filter, setFilter] = useState("All")

  // Extract unique tech stack items for filter buttons
  const allTechStacks = projects.flatMap((project) => project.techStack)
  const uniqueTechStacks = ["All", ...new Set(allTechStacks)]

  // Filter projects based on selected tech
  const filteredProjects =
    filter === "All" ? projects : projects.filter((project) => project.techStack.includes(filter))

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {uniqueTechStacks.map((tech) => (
          <Button
            key={tech}
            variant={filter === tech ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(tech)}
          >
            {tech}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

