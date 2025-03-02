import React from 'react';
import './HealthClubSection.css';

function HealthClubSection() {
  return (
    <section
      id="health-club"
      className="health-club-section"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?gym,spa')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="health-club-content">
        <h2>Health Club</h2>
        <p>
          Our hotel's health club offers a rejuvenating escape, featuring a state-of-the-art gym with the latest cardio machines, free weights, and strength training equipment.
        </p>
        <button className="find-out-more-button">Find Out More</button>
      </div>
    </section>
  );
}

export default HealthClubSection;