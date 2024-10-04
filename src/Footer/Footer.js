import React from 'react';
import './Footer.css'; // Add custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Ahmed Mirza. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#linkedin"><i className="icon-linkedin"></i></a>
          <a href="#github"><i className="icon-github"></i></a>
          <a href="#medium"><i className="icon-medium"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
