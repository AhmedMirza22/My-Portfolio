import React from 'react';
import './Portfolio.css'; // Add custom styles

import nbpImage1 from '../assets/nbpImage1.webp';
import nbpImage2 from '../assets/nbpImage2.webp';
import nbpImage3 from '../assets/nbpImage3.webp';
import cdnsImage1 from '../assets/cdnsImage1.webp';
import cdnsImage2 from '../assets/cdnsImage2.webp';
import cdnsImage3 from '../assets/cdnsImage3.webp';
import payAppImage1 from '../assets/payAppImage1.webp';
import payAppImage2 from '../assets/payAppImage2.webp';
import payAppImage3 from '../assets/payAppImage3.webp';
import EquiTripImage1 from '../assets/EquiTripImage1.webp';
import EquiTripImage2 from '../assets/EquiTripImage2.webp';
import EquiTripImage3 from '../assets/EquiTripImage3.webp';






const Portfolio = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Recent Projects</h2>

      <div className="projects-container">
        {/* First Project: The Exhibits */}
        <div className="project-card">
          <div className="project-images">
            <img src={nbpImage1} alt="NBP App 1" className="project-image" />
            <img src={nbpImage2} alt="NBP App 2" className="project-image" />
            <img src={nbpImage3} alt="NBP App 3" className="project-image" />
          </div>
          <div className="project-details">
            <h3>NBP Digital App</h3>
            <p>Check your transaction history and manage your account with ease using the NBP Digital App.</p>
            <a href="https://play.google.com/store/apps/details?id=com.paysys.nbpdigital" className="project-link">
              Learn More <span>→</span>
            </a>
          </div>
        </div>

        {/* Second Project: Mia Plus */}
        <div className="project-card">
          <div className="project-images">
            <img src={cdnsImage1} alt="NBP App 1" className="project-image" />
            <img src={cdnsImage2} alt="NBP App 2" className="project-image" />
            <img src={cdnsImage3} alt="NBP App 3" className="project-image" />
          </div>
          <div className="project-details">
            <h3>National Savings App</h3>
            <p>This app allows users to easily access and manage their National Savings accounts. It provides real-time information on account balances, profit rates, and prize bond results. Users can stay updated on investment plans and track the status of their transactions.</p>
            <a href="https://play.google.com/store/apps/details?id=com.nationalsaving" className="project-link">
              Learn More <span>→</span>
            </a>
          </div>
        </div>

        {/* Third Project: NBP Digital App */}
        <div className="project-card">
          <div className="project-images">
            <img src={payAppImage1} alt="NBP App 1" className="project-image" />
            <img src={payAppImage2} alt="NBP App 2" className="project-image" />
            <img src={payAppImage3} alt="NBP App 3" className="project-image" />
          </div>
          <div className="project-details">
            <h3>Pay App</h3>
            <p>Tap & Pay is a mobile payment app designed for seamless and secure transactions. Users can make payments quickly by simply tapping their device at participating stores. The app supports multiple payment methods, ensuring convenient and hassle-free payments, whether you're shopping in-store or online.</p>
            <a href="https://play.google.com/store/apps/details?id=com.tap_pay" className="project-link">
              Learn More <span>→</span>
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-images">
            <img src={EquiTripImage1} alt="NBP App 1" className="project-image" />
            <img src={EquiTripImage2} alt="NBP App 2" className="project-image" />
            <img src={EquiTripImage3} alt="NBP App 3" className="project-image" />
          </div>
          <div className="project-details">
            <h3>EquiTrip</h3>
            <p>EquiTrace is a veterinary app designed for tracking the health and medical records of horses. Veterinarians and horse owners can easily manage medical treatments, vaccinations, and other health-related information, all in one place. The app ensures horse welfare with precise tracking and easy access to detailed medical records.</p>
            <a href="https://play.google.com/store/apps/details?id=com.veterinaryadvances.equitrace" className="project-link">
              Learn More <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
