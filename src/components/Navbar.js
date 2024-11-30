import React from "react";
import "../assets/css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li>
          <a href="/sair">Sair</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
