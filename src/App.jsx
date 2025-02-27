import { useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaArrowRight, FaArrowLeft, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './App.css';

const rooms = [
  {
    type: 'Luxury Room',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
    price: 300,
    description: 'Spacious luxury room with modern amenities and city view.'
  },
  {
    type: 'Deluxe Room',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
    price: 200,
    description: 'Comfortable deluxe room with premium furnishings.'
  },
  {
    type: 'Standard Room',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
    price: 150,
    description: 'Cozy studio room perfect for short stays.'
  }
];

const specialOffers = [
  {
    id: 1,
    title: 'Dine & Stay Package',
    image: 'https://cdn.standardmedia.co.ke/images/wysiwyg/images/3TRIARUa0wXn7l3oopVn3pwAybhgrXyDDh0akwX0.jpg',
    details: [
      { title: 'Gourmet Dining Experience', description: 'Complimentary welcome drink & dessert' },
      { title: 'Luxurious stay', description: 'Breakfast buffet for two' },
      { title: 'A Complementary bottle of wine/champagne in the room', description: 'A Bottle on the house for luxurious rooms' },
      { title: 'Extra Delights', description: 'Free access to hotel pool gym & sauna' }
    ]
  },
  {
    id: 2,
    title: 'City Tour Package',
    image: 'https://eldoret.city/wp-content/uploads/2023/06/Skyline_of_Eldoret_city.jpg',
    details: [
      { title: 'City Tour Experience', description: 'Guided half-day/full day city tour with experienced guide' },
      { title: 'Extra Delights', description: 'Airport pick-up & drop-off service' },
      { title: 'City Adventure', description: 'Complimentary bike rental for day exploration' },
      { title: 'Client Support', description: 'Airport Transfers available upon request' }
    ]
  }
];

const aboutUsContent = {
  title: 'ABOUT US',
  text: 'Nestled in the serene outskirts of Eldoret, in the charming location of Merewet, Wellhall Hotel is your perfect escape from the hustle and bustle of city life. Our hotel blends modern luxury with warm hospitality, offering guests an unforgettable stay surrounded by nature\'s tranquility. Whether you\'re visiting for business, leisure, or a romantic getaway, we provide a range of elegantly designed rooms that promise comfort and relaxation. Our exceptional dining experiences, personalized city tour packages, and exclusive dine & stay offers ensure every moment spent with us is truly special.',
  image: 'https://media-cdn.tripadvisor.com/media/photo-p/1c/9a/3a/fc/img-20210126-200336-023.jpg'
};

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const handleBooking = (room) => {
    setSelectedRoom(room);
    // Add booking logic here
    alert(`Booking ${room.type}`);
  };

  const handleBookOffer = (offer) => {
    alert(`Booking ${offer.title} package. Our team will contact you shortly with details.`);
  };

  const renderHomePage = () => (
    <>
      <div className="rooms-title-container">
        <h1 className="rooms-title">Rooms & Suites</h1>
      </div>

      <div className="rooms-container">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <img src={room.image} alt={room.type} />
            <h2>{room.type}</h2>
            <p>{room.description}</p>
            <p className="price">${room.price} per night</p>
            <button onClick={() => handleBooking(room)} className="book-button">
              BOOK YOUR STAY
            </button>
          </div>
        ))}
      </div>
      
      <div className="page-navigation">
        <button 
          className={`page-button ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          Rooms
        </button>
        <button 
          className={`page-button ${currentPage === 'offers' ? 'active' : ''}`}
          onClick={() => setCurrentPage('offers')}
        >
          Special Offers <FaArrowRight />
        </button>
        <button 
          className={`page-button ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => setCurrentPage('about')}
        >
          About Us <FaArrowRight />
        </button>
      </div>
    </>
  );

  const renderSpecialOffersPage = () => (
    <div className="special-offers-container">
      <h1 className="special-offers-title">Special Offers</h1>
      
      <div className="offers-grid">
        {specialOffers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <div className="offer-content">
              <h2 className="offer-title">{offer.title}</h2>
              <div className="offer-details">
                <ol>
                  {offer.details.map((detail, index) => (
                    <li key={index}>
                      {detail.title && <strong>{detail.title}</strong>}
                      {detail.title && <br />}
                      <p>~{detail.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <button 
                className="book-offer-button"
                onClick={() => handleBookOffer(offer)}
              >
                BOOK THIS PACKAGE
              </button>
            </div>
          </div>
        ))}
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
          Special Offers
        </button>
        <button 
          className={`page-button ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => setCurrentPage('about')}
        >
          About Us <FaArrowRight />
        </button>
      </div>
    </div>
  );

  const renderAboutUsPage = () => (
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
      </div>,
      {renderFooter()}
    </div>
  );

  const renderContent = () => {
    if (currentPage === 'home') return renderHomePage();
    if (currentPage === 'offers') return renderSpecialOffersPage();
    if (currentPage === 'about') return renderAboutUsPage();
    return renderHomePage();
  };

  const renderFooter = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Office Hours</h3>
          <div className="footer-info">
            <p>Monday to Friday</p>
            <p>9:00 am to 6:00 pm</p>
            <p>Saturday</p>
            <p>9:00 am to 12:00 noon</p>
          </div>
        </div>
        
        <div className="footer-section">
          {/* Empty section for layout */}
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Reservations Office</h3>
          <div className="footer-info">
            <p><FaMapMarkerAlt /> Kenyatta Street, Kikao 64 Building</p>
            <p><FaPhone /> +254703647000</p>
            <p><FaEnvelope /> Thewellhallhotel@gmail.com</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Get Social</h3>
          <div className="social-icons">
            <a href="#facebook" className="social-icon">
              <FaFacebook />
            </a>
            <a href="#twitter" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#instagram" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1 className="hotel-title">THE WELLHALL HOTEL</h1>
        <div className="nav-links">
          <a href="#home" onClick={() => setCurrentPage('home')}>HOME</a>
          <a href="#login">LOGIN</a>
          <a href="#book" className="book-now">BOOK NOW</a>
        </div>
      </nav>

      {renderContent()}
      
    </div>
  );
}

export default App