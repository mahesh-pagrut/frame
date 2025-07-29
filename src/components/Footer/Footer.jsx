import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/maheshpagrut" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/mahesh_dpm/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://portfolio-wg4w.vercel.app/" target="_blank" rel="noopener noreferrer">
          <FaGlobe />
        </a>
      </div>
      <p className="footer-text">
        Made by Mahesh • maheshdpmayshu@gmail.com • © 2025
      </p>
    </footer>
  );
};

export default Footer;
