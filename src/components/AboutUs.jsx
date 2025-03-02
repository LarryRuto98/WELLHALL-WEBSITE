import { FaArrowLeft } from 'react-icons/fa';
import Footer from './Footer';
import './AboutUs.css';

function AboutUs({ aboutUsContent, currentPage, setCurrentPage }) {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">{aboutUsContent.title}</h1>
      
      <div className="about-us-content">
        <div className="about-us-text">
          <p>{aboutUsContent.text}</p>
        </div>
        <img src={aboutUsContent.image} alt="The Wellhall Hotel" className="about-us-image" />
      </div>
      
      <div className="page-navigation">
        <button 
          className={`page-button ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          <FaArrowLeft /> Rooms
        </button>
        <button 
          className={`page-button ${currentPage === 'offers' ? 'active' : ''}`}
          onClick={() => setCurrentPage('offers')}
        >
          <FaArrowLeft /> Special Offers
        </button>
        <button 
          className={`page-button ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => setCurrentPage('about')}
        >
          About Us
        </button>
      </div>
      
      {/* Footer only appears on the About Us page */}
      <Footer />
    </div>
  );
}

export default AboutUs;