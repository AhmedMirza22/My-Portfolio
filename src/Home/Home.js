import React from 'react';
import './Home.css';
import profilePic from '../assets/MyImage.jpeg'

const HomeScreen = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>I am Ahmed Mirza</h1>
        <h2>Senior Software Engineer</h2>
        <p>Populating Play Store & Apple Store. Developing MVPs lightning fast. React & React Native Developer with a passion for creating beautiful and functional user experiences. A hardworking, ambitious, task focused person always ready to empower
knowledge and gain experience. I am eager to be challenged to grow and
improve my skills. My career objective is to be part of an organization that
provides a healthy competitive environment that will help in polishing my
professional skills.</p>
<a href="/AhmedMirza.pdf" download>
          <button className="download-btn">Download Resume</button>
        </a>      </div>
      <div className="hero-image">
        <img src={profilePic} alt="Hussain Habibullah" className="profile-img" />
      </div>
      <div className="social-icons">
           <a href="#resume"><i className="icon-download"></i></a>
           <a href="#linkedin"><i className="icon-linkedin"></i></a>
           <a href="#github"><i className="icon-github"></i></a>
           <a href="#medium"><i className="icon-medium"></i></a>
</div>
    </section>
  );
};

export default HomeScreen;




