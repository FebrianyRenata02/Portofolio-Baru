import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="social-icons">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
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
