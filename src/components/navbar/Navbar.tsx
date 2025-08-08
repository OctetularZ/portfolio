import React, { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { motion } from "motion/react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("Home")

  const links = ["Home", "Projects", "Work", "About", "Contact"]

  return (
    <nav className="bg-coffee-900 text-white py-4">
      <div className="max-w-10/12 mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          <motion.h1
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              y: { type: "tween", ease: "easeInOut", duration: 0.7 },
              scale: { duration: 0.1 },
            }}
            className="text-3xl text-coffee-300 hover:text-coffee-100"
          >
            TAIWO.O
          </motion.h1>
        </a>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>

        {/* Links container with max width */}
        <div
          className={`absolute top-full left-0 w-full bg-gray-900 md:static md:bg-transparent md:block md:max-w-md ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 md:justify-end md:max-w-md mx-auto">
            {links.map((link) => (
              <motion.li
                key={link}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  y: { type: "tween", ease: "easeInOut", duration: 0.7 },
                  scale: { duration: 0.1 },
                }}
                className="border-b text-coffee-300 md:border-none text-center md:text-left"
              >
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`block px-3 py-3 hover:text-coffee-100 ${
                    active === link
                      ? "underline underline-offset-8 decoration-coffee-300"
                      : ""
                  }`}
                  onClick={() => {
                    setIsOpen(false)
                    setActive(link)
                  }}
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
