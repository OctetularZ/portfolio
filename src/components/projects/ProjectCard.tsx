import React from "react"

const ProjectCard = () => {
  return (
    <a href="#">
      <div className="w-80 h-80 bg-transparent border-1 border-coffee-300 m-10 flex items-center justify-center">
        <img
          src="/projects/placeholder.svg"
          className="h-10/12 w-10/12 border-1 border-coffee-300"
        />
      </div>
    </a>
  )
}

export default ProjectCard
