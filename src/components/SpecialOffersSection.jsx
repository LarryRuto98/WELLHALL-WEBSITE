import React from 'react';
import './SpecialOffersSection.css';

function SpecialOffersSection() {
  return (
    <section
      id="special-offers"
      className="special-offers-section"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?hotel,deal')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="special-offers-content">
        <h2>Special Offers</h2>
        <p>Check out our exclusive deals and packages for a memorable stay.</p>
        <button className="view-offers-button">View Offers</button>
      </div>
    </section>
  );
}

export default SpecialOffersSection;