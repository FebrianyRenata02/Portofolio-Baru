import React from "react";
import "./Footer.css";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="social-icons">
          <a href="https://www.instagram.com/renata_official_123/">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@renataofficial5419">
            <FaYoutube />
          </a>
          <a href="https://www.facebook.com/febriany.renata/">
            <FaFacebook />
          </a>
        </div>
        <div className="footer-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="credit">
          Created by <b>Febriany Renata</b> | © 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
