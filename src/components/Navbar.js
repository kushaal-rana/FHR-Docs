import React from 'react';
import './navbar.css';

export default function Navbar() {
  const imagePath = process.env.PUBLIC_URL + '/favicon-32x32.png';
  return (
        <nav className="navbar">
      <div className="logoAndName">
        <img href="#" src={imagePath} alt="SBU Medicine" className="logoSBUMed" />
        <a href="#" className="text-white text-xl font-bold">FHR</a>
      </div>
      <div className="links">
          <a href="#" className="text-white text-xl font-bold">Docs</a>
          <a href="#" className="text-white text-xl font-bold">Community</a>
      </div>
    </nav>
      )
}
