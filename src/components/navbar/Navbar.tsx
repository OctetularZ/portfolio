import React, { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-coffee-900 text-white py-4">
      <div className="max-w-10/12 mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          <h1 className="text-3xl text-coffee-300 hover:text-coffee-100">
            TAIWO.O
          </h1>
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
            {["Home", "Work", "Projects", "About", "Contact"].map((link) => (
              <li
                key={link}
                className="border-b text-coffee-300 border-gray-700 md:border-none text-center md:text-left"
              >
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block px-3 py-3 hover:text-coffee-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
