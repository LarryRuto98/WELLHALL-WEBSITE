import React from 'react';
import './DiningSection.css';

function DiningSection() {
  return (
    <section
      id="dining"
      className="dining-section"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?restaurant,fine-dining')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="dining-content">
        <h2>Contemporary Dining</h2>
        <p>
          An unforgettable culinary experience awaits you at our outlets. Choose our all-day diner 'Flavour' or savor the best views of the city from our rooftop restaurants.
        </p>
        <button className="view-outlets-button">View All Outlets</button>
      </div>
    </section>
  );
}

export default DiningSection;