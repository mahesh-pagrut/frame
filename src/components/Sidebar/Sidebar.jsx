// src/components/Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`sidebar-container ${open ? 'open' : ''}`}>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <FaBars size={24} color="#fff" />
      </div>

      {open && (
        <nav className="sidebar-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/guide" className="nav-link">Guide</Link>
          <Link to="/app-info" className="nav-link">App Info</Link>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
