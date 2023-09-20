import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-teal-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white text-xl font-bold">FHR</a>

        {/* Navigation Links */}
        <ul className="space-x-4 flex">
          <li><a href="#" className="text-white">Docs</a></li>
          <li><a href="#" className="text-white">Community</a></li>
        </ul>
      </div>
    </nav>
  )
}
