import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Welcome.css';

function Welcome({ setCurrentPage }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    setCurrentPage('home');
    navigate('/rooms');
  };

  useEffect(() => {
    // Parallax effect for background
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const welcomeHero = document.querySelector('.welcome-hero');
      if (welcomeHero) {
        welcomeHero.style.backgroundPositionY = `${scrollValue * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="welcome-container">
      <div className="welcome-hero">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome to The Wellhall Hotel</h1>
          <p className="welcome-subtitle">Experience luxury and comfort in the heart of Eldoret</p>
          <button className="explore-button" onClick={handleExplore}>
            Explore Our Rooms <FaArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
      
      <div className="welcome-features">
        <div className="feature-card">
          <div className="feature-icon">
            <img src="https://img.icons8.com/fluency/96/bed.png" alt="Luxury Rooms" />
          </div>
          <h3>Luxury Rooms</h3>
          <p>Experience comfort in our elegantly designed rooms with modern amenities</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <img src="https://img.icons8.com/fluency/96/restaurant.png" alt="Fine Dining" />
          </div>
          <h3>Fine Dining</h3>
          <p>Savor exquisite cuisine prepared by our world-class chefs</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <img src="https://img.icons8.com/fluency/96/swimming-pool.png" alt="Premium Amenities" />
          </div>
          <h3>Premium Amenities</h3>
          <p>Enjoy our swimming pool, spa, and fitness center during your stay</p>
        </div>
      </div>
      
      <div className="welcome-cta">
        <div className="cta-content">
          <h2>Special Offers Await You</h2>
          <p>Discover our exclusive packages and make your stay even more memorable</p>
          <button className="cta-button" onClick={() => {
            setCurrentPage('offers');
            navigate('/offers');
          }}>
            View Special Offers
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;