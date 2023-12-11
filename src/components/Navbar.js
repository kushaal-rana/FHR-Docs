import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const imagePath = process.env.PUBLIC_URL + "/favicon-32x32.png";
  return (
    <nav className="navbar">
      <div className="logoAndName">
        <img
          href="#"
          src={imagePath}
          alt="SBU Medicine"
          className="logoSBUMed"
        />

        <Link to="/" className="text-white text-xl font-bold">
          SBU-FHR
        </Link>
      </div>
      <div className="links">
        <Link
          to="http://172.31.158.228/"
          className="text-white text-xl font-bold"
        >
          Query Tool
        </Link>
        <Link to="/" className="text-white text-xl font-bold">
          Docs
        </Link>

        <a href="#" className="text-white text-xl font-bold">
          Community
        </a>
      </div>
    </nav>
  );
}
