import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="experience-education">
        <div className="experience">
          <h2><i className="fas fa-briefcase"></i> My Experience</h2>
          <div className="experience-card">
            <p>July 2022 – Present</p>
            <h3>Sr. Software Engineer (React Native & React JS)</h3>
            <p>Paysys Labs</p>
            {/* <ul>
              <li>Developed mobile apps for banking and product solutions using React Native and React JS.</li>
              <li>Implemented advanced features like SSL pinning, Firebase notifications, and payment gateway integration (RAAST, PAYPAL, GOOGLE-PAY).</li>
              <li>Led projects, mentored juniors, and conducted code reviews for reusability and best practices.</li>
              <li>Set up CI/CD pipelines using GitLab to ensure high-quality code and rapid deployments.</li>
            </ul> */}
          </div>
          
          <div className="experience-card">
            <p>January 2022 – June 2022</p>
            <h3>Junior React Native & React JS Developer</h3>
            <p>TekRevol</p>
            {/* <ul>
              <li>Built and maintained cross-platform iOS/Android mobile applications with React Native.</li>
              <li>Used Redux-Thunk and Redux-Saga for state management and application middleware.</li>
            </ul> */}
          </div>

          <div className="experience-card">
            <p>January 2021 – January 2022</p>
            <h3>Junior React Native Developer</h3>
            <p>Murtajis-The Software Company</p>
            {/* <ul>
              <li>Collaborated with teams to build mobile applications using React Hooks and functional components.</li>
              <li>Developed front-end UIs with smooth animations, adhering to clean code principles.</li>
            </ul> */}
          </div>
        </div>
        
        <div className="education">
          <h2><i className="fas fa-graduation-cap"></i> My Education</h2>
          <div className="education-card">
            <p>2023</p>
            <h3>Bachelor of Computer Science</h3>
            <p>PAF-KIET</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
