import { useState } from "react"
import "./App.css"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
    </>
  )
}

export default App
