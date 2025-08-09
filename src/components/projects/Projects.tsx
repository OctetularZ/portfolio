import React from "react"
import ProjectGrid from "./ProjectGrid"

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-coffee-900 w-full h-full flex justify-center items-center"
    >
      <div className="w-11/12 my-15 border-1 border-coffee-300 bg-white/10 backdrop-blur-xl shadow-lg border-opacity-10">
        <ProjectGrid />
      </div>
    </div>
  )
}

export default Projects
