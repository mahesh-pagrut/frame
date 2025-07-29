import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="sidebar-container">
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">🏠 Home</a></li>
          <li><a href="#about">ℹ️ About</a></li>
          <li><a href="#contact">📞 Contact</a></li>
          <li><a href="#guide">📘 Guide</a></li>
          <li><a href="#application">🧠 Application</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
