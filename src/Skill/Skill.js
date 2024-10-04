import React from 'react';
import './Skill.css'; // Add custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faNodeJs, faWordpress, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons'; // Firebase uses this icon (or replace with Firebase SVG if preferred)

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <p>I bring your vision to life with custom-built web and mobile solutions</p>
      
      <div className="skills-container">
        {/* Existing Skills */}
        <div className="skill-card">
          <FontAwesomeIcon icon={faReact} size="3x" className="icon react-icon" />
          <h3>React</h3>
        </div>
        
        <div className="skill-card">
          <FontAwesomeIcon icon={faJsSquare} size="3x" className="icon js-icon" />
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <FontAwesomeIcon icon={faNodeJs} size="3x" className="icon node-icon" />
          <h3>Node.js</h3>
        </div>

        {/* New Skills */}
        <div className="skill-card">
          <FontAwesomeIcon icon={faFire} size="3x" className="icon firebase-icon" />
          <h3>Firebase</h3>
        </div>

        <div className="skill-card">
          <FontAwesomeIcon icon={faGithub} size="3x" className="icon github-icon" />
          <h3>GitHub</h3>
        </div>

        <div className="skill-card">
          <FontAwesomeIcon icon={faGitlab} size="3x" className="icon gitlab-icon" />
          <h3>GitLab</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
