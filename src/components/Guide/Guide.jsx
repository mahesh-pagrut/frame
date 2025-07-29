import React, { useState, useEffect, useRef } from 'react';
import './Guide.css';
import { FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa';

const GuideModal = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowModal(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        className="guide-toggle-button"
        onClick={() => setShowModal((prev) => !prev)}
        aria-label="Toggle Guide"
      >
        <span className="hamburger-icon">{showModal ? '×' : '☰'}</span>
      </button>

      {showModal && (
        <div className="guide-modal-wrapper">
          <div className="guide-modal-content glass" ref={modalRef}>
            <h3>🧭 How to use the app</h3>
            <ul>
              <li>1️⃣ Enter a name like <strong>maxi</strong> to generate a unique link.</li>
              <li>2️⃣ Share the link with your friends.</li>
              <li>3️⃣ They can join the room using the same link.</li>
              <li>4️⃣ Start your video chat session!</li>
            </ul>

            {/* Contact Developer */}
            <p className="contact-title">📬 Contact Developer</p>
            <div className="guide-links">
              <a
                href="https://portfolio-wg4w.vercel.app/"
                className="portfolio-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
              >
                <FaGlobe />
              </a>
              <a
                href="https://www.linkedin.com/in/maheshpagrut"
                className="linkedin-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/your_instagram_username"
                className="instagram-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>

            <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default GuideModal;
