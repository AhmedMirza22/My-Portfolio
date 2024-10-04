import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-details">
        <div className="contact-item">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faPhone} size="lg" className="icon" />
          </div>
          <div>
            <h4>Phone</h4>
            <p>+92 335 6555 998</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="icon" />
          </div>
          <div>
            <h4>Email</h4>
            <p>ahmedmirza2997@gmail.com</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="icon" />
          </div>
          <div>
            <h4>LinkedIn</h4>
            <a 
              href="https://www.linkedin.com/in/ahmed-mirza-86b899204/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              @ahmedmirza
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
