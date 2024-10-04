import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css'; // Make sure to include your CSS file for styling

const Header = () => {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle the hamburger menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Ahmed Mirza</div>

        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hire Me button */}
        <button className="hire-btn">
          <Link to="contact" smooth={true} duration={500}>
            Hire Me
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
