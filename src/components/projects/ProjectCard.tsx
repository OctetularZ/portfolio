import React, { useState } from "react"
import { motion } from "motion/react"

const ProjectCard = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="#"
      className="relative group overflow-hidden w-80 h-80 flex items-center justify-center m-10 bg-transparent border border-coffee-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container - relative, sized to image */}
      <div className="relative h-10/12 w-10/12 flex items-center justify-center">
        <img
          src="/projects/placeholder.svg"
          alt="Project"
          className="h-full w-full border border-coffee-300 object-contain"
        />

        {/* Overlay only over the image */}
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={hovered ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white p-4 text-center pointer-events-none"
        >
          <h3 className="text-lg font-bold">Project Title</h3>
          <p className="text-sm mt-2">
            Short description of the project goes here.
          </p>
        </motion.div>
      </div>
    </a>
  )
}

export default ProjectCard
