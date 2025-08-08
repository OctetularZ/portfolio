import React, { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-coffee-100 text-white py-4">
      <div className="max-w-10/12 mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          <h1 className="text-3xl text-coffee-900">TAIWO.O</h1>
        </a>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
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
                className="border-b text-coffee-900 border-gray-700 md:border-none text-center md:text-left"
              >
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block px-3 py-3 hover:text-gray-400"
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
