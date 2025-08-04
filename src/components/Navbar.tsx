// src/components/Navbar.tsx
import React from "react";
import TrueFocus from "./TrueFocus"; // <- ini penting, pastikan path-nya benar
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <TrueFocus
          sentence="👨‍💻 Febriany Renata"
          manualMode={false}
          blurAmount={5}
          borderColor="lime"
          glowColor="rgba(0, 255, 0, 0.4)"
          animationDuration={1}
          pauseBetweenAnimations={1}
        />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
