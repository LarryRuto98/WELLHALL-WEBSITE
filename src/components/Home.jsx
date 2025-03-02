import React from 'react';
import ImageCarousel from './ImageCarousel';
import './Home.css';

function Home({ setCurrentPage }) {
  return (
    <div className="home-landing">
      <ImageCarousel />
      <div className="landing-content">
        <h1>Welcome to The Wellhall Hotel</h1>
        <p>Experience luxury and comfort like never before.</p>
        <button onClick={() => setCurrentPage('rooms')}>Explore Rooms</button>
      </div>
    </div>
  );
}

export default Home;