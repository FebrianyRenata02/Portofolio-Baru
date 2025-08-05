import React, { useState } from "react";
import TrueFocus from "./TrueFocus";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
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

        {/* Hamburger (muncul saat mobile) */}
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>

        {/* Desktop links */}
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

      {/* Sidebar Mobile */}
      <div className={`sidebar ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={closeSidebar}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeSidebar}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeSidebar}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeSidebar}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeSidebar} />}
    </>
  );
};

export default Navbar;
