import React from "react"
import ProjectCard from "./ProjectCard"

const ProjectGrid = () => {
  return (
    <div className="flex flex-wrap flex-row justify-between gap-5">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

export default ProjectGrid
