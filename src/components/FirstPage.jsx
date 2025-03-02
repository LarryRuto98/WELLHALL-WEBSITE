import React, { useState } from 'react';
import Footer from './Footer';
import LoginSignUp from './LoginSignUp';
import './FirstPage.css';

function FirstPage({ setShowSecondPage, handleLogin, handleSignUp, error }) {
  const [showLoginSignUp, setShowLoginSignUp] = useState(false);

  // Array of relevant image keywords for features
  const featureImages = [
    'restaurant,luxury,dining',
    'gym,spa,fitness',
    'hotel,deal,special-offer'
  ];

  const handleExploreClick = () => {
    setShowLoginSignUp(true);
  };

  return (
    <div className="first-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="welcome-section">
          <h1>Welcome to The Wellhall Hotel</h1>
          <p>Experience luxury and comfort like never before.</p>
          <button className="explore-button" onClick={handleExploreClick}>
            Explore More
          </button>
        </div>
      </div>

      {/* Hotel Features Section */}
      <div className="hotel-features">
        <h2>Hotel Features</h2>
        <div className="features-grid">
          {featureImages.map((keywords, index) => (
            <div className="feature-card" key={index}>
              <img
                src={`https://source.unsplash.com/400x300/?${keywords}`}
                alt={keywords.split(',')[0]}
                onError={(e) => {
                  e.target.src = 'https://picsum.photos/400/300';
                }}
              />
              <h3>
                {index === 0 && 'Contemporary Dining'}
                {index === 1 && 'Health Club'}
                {index === 2 && 'Special Offers'}
              </h3>
              <p>
                {index === 0 && 'Enjoy a variety of cuisines at our world-class restaurants.'}
                {index === 1 && 'Stay fit with our state-of-the-art gym and spa facilities.'}
                {index === 2 && 'Check out our exclusive deals and packages.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Login/SignUp Modal */}
      {showLoginSignUp && (
        <div className="modal-overlay">
          <div className="modal-content">
            <LoginSignUp
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              setShowLoginSignUp={setShowLoginSignUp}
              error={error}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default FirstPage;