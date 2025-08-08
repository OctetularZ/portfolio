import React from "react"
import { Button } from "../ui/button"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-[url(/hero/hero-bg.jpg)] bg-cover bg-center">
      <h1 className="text-6xl md:text-7xl max-w-1/2 mb-6 text-white">
        "Some People Be So Focused On The Cheese, They Forget About The Trap"
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-coffee-50 font-sans mb-8">
        I’m a software engineer passionate about building scalable, elegant, and
        human-centered digital experiences.
      </p>
      <Button variant={"link"} className="px-6 py-3 text-white">
        View More
      </Button>
    </section>
  )
}
