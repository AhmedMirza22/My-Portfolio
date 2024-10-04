import React from 'react';
import './Skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faNodeJs, faWordpress, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Replace faLinkedin with TypeScript
import { faFileCode } from '@fortawesome/free-solid-svg-icons'; // You can use faFileCode or get an SVG for TypeScript


const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <p>I bring your vision to life with custom-built web and mobile solutions</p>
      
      <div className="skills-container">
        <div className="skill-card">
          <FontAwesomeIcon icon={faReact} size="3x" className="icon react-icon" />
          <p className="skill-level">90%</p>
          <h3>React</h3>
        </div>
        
        <div className="skill-card">
          <FontAwesomeIcon icon={faJsSquare} size="3x" className="icon js-icon" />
          <p className="skill-level">80%</p>
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <FontAwesomeIcon icon={faFileCode} size="3x" className="icon ts-icon" /> {/* Correct TypeScript icon */}
          <p className="skill-level">75%</p>
          <h3>TypeScript</h3>
        </div>

        <div className="skill-card">
          <FontAwesomeIcon icon={faNodeJs} size="3x" className="icon node-icon" />
          <p className="skill-level">65%</p>
          <h3>Node.js</h3>
        </div>

      </div>
    </section>
  );
};

export default Skills;
