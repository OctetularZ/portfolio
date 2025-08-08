import React from "react"
import { Button } from "../ui/button"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-[url(/hero/hero-bg-star-no-shadow.png)] bg-cover bg-center">
      <h1 className="text-6xl md:text-7xl max-w-1/2 mb-6 text-white">
        "Some People Be So Focused On The Cheese, They Forget About The Trap"
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-coffee-50 font-sans mb-8">
        I’m a software engineer passionate about building scalable, elegant, and
        human-centered digital experiences.
      </p>
      <a
        href="#"
        className="inline-flex items-center border-b border-white text-white hover:text-gray-300 py-1"
      >
        <span>View More</span>
        <ArrowLongRightIcon className="ml-2 h-5 w-5" />
      </a>
    </section>
  )
}
