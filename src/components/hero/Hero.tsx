import React, { useState } from "react"
import { Button } from "../ui/button"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"
import { motion } from "motion/react"

export default function Hero() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.section className="bg-[url(/hero/hero-bg.png)] bg-cover bg-center">
      <motion.div
        initial={{ y: 800 }}
        animate={{ y: 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.7,
        }}
        className="min-h-screen flex flex-col justify-center items-center text-center"
      >
        <h1 className="text-6xl md:text-7xl max-w-1/2 mb-10 text-coffee-900">
          "Some People Be So Focused On The Cheese, They Forget About The Trap"
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-coffee-900 mb-8">
          I’m a software engineer passionate about building scalable, elegant,
          and human-centered digital experiences.
        </p>
        <a
          href="#"
          className="inline-flex items-center border-b border-coffee-900 text-coffee-900 hover:text-coffee-500 py-1"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span>View More</span>
          <motion.div animate={{ x: hovered ? 5 : 0 }}>
            <ArrowLongRightIcon className="ml-2 h-5 w-5" />
          </motion.div>
        </a>
      </motion.div>
    </motion.section>
  )
}
