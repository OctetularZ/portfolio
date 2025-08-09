import React from "react"
import ProjectCard from "./ProjectCard"

const ProjectGrid = () => {
  return (
    <div className="flex flex-wrap flex-row justify-evenly">
      <ProjectCard />
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
