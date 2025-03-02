import React, { useEffect, useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [backgroundImage, setBackgroundImage] = useState('https://source.unsplash.com/1600x900/?hotel,luxury');

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage(`https://source.unsplash.com/1600x900/?hotel,luxury,${Math.random()}`);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1>Welcome to The Wellhall Hotel</h1>
        <p>Experience luxury and comfort like never before.</p>
        <button className="book-now-button">Book Your Stay Now</button>
      </div>
    </div>
  );
}

export default HeroSection;