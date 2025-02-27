import { useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaArrowRight, FaArrowLeft, FaMapMarkerAlt, FaPhone, FaEnvelope, FaSearch, FaSignOutAlt } from 'react-icons/fa';
import './App.css';

const rooms = [
  {
    type: 'Luxury Room',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
    price: 300,
    description: 'Spacious luxury room with modern amenities and city view.',
    maxGuests: 3,
    bedConfig: '1 QUEEN OR 2 SINGLE BEDS'
  },
  {
    type: 'Deluxe Room',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
    price: 200,
    description: 'Comfortable deluxe room with premium furnishings.',
    maxGuests: 3,
    bedConfig: '1 QUEEN OR 2 SINGLE BEDS'
  },
  {
    type: 'Standard Room',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
    price: 150,
    description: 'Cozy studio room perfect for short stays.',
    maxGuests: 2,
    bedConfig: '1 QUEEN OR KING BED'
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
      { title: 'A Complementary bottle of wine/champagnein the room', description: 'Abottle on the house for Luxurious Rooms' },
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
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([
    { email: 'test@example.com', password: 'password123', name: 'Test User' }
  ]);

  const handleBooking = (room) => {
    setSelectedRoom(room);
    if (isLoggedIn) {
      alert(`Booking ${room.type}`);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleBookOffer = (offer) => {
    if (isLoggedIn) {
      alert(`Booking ${offer.title} package. Our team will contact you shortly with details.`);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find(u => u.email === loginEmail && u.password === loginPassword);
    if (foundUser) {
      setUser(foundUser);
      setIsLoggedIn(true);
      setShowLoginModal(false);
      setCurrentPage('dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!registerEmail || !registerPassword || !registerName) {
      alert('Please fill in all fields');
      return;
    }
    
    if (users.some(u => u.email === registerEmail)) {
      alert('Email already registered');
      return;
    }
    
    const newUser = { email: registerEmail, password: registerPassword, name: registerName };
    setUsers([...users, newUser]);
    setUser(newUser);
    setIsLoggedIn(true);
    setShowRegisterModal(false);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setCurrentPage('home');
  };

  const filteredRooms = searchQuery 
    ? rooms.filter(room => 
        room.type.toLowerCase().includes(searchQuery.toLowerCase()) || 
        room.description.toLowerCase().includes(searchQuery.toLowerCase()))
    : rooms;

  const renderLoginModal = () => (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-modal" onClick={() => setShowLoginModal(false)}>×</button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={loginEmail} 
              onChange={(e) => setLoginEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={loginPassword} 
              onChange={(e) => setLoginPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="register-link">
          Don't have an account? 
          <button 
            onClick={() => {
              setShowLoginModal(false);
              setShowRegisterModal(true);
            }}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );

  const renderRegisterModal = () => (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-modal" onClick={() => setShowRegisterModal(false)}>×</button>
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="register-name">Full Name</label>
            <input 
              type="text" 
              id="register-name" 
              value={registerName} 
              onChange={(e) => setRegisterName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-email">Email</label>
            <input 
              type="email" 
              id="register-email" 
              value={registerEmail} 
              onChange={(e) => setRegisterEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <input 
              type="password" 
              id="register-password" 
              value={registerPassword} 
              onChange={(e) => setRegisterPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="login-button">Register</button>
        </form>
        <p className="register-link">
          Already have an account? 
          <button 
            onClick={() => {
              setShowRegisterModal(false);
              setShowLoginModal(true);
            }}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );

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
      </div>
      
      {/* Footer only appears on the About Us page */}
      {renderFooter()}
    </div>
  );

  const renderDashboardPage = () => (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">AVAILABLE ROOMS</h1>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="search room type or amenities" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            <FaSearch /> Search
          </button>
        </div>
      </div>
      
      <div className="dashboard-rooms">
        {filteredRooms.map((room, index) => (
          <div key={index} className="dashboard-room-card">
            <img src={room.image} alt={room.type} className="dashboard-room-image" />
            <h2 className="dashboard-room-title">{room.type}</h2>
            <p className="dashboard-room-details">MAX {room.maxGuests} GUESTS / {room.bedConfig}</p>
            <button 
              className="dashboard-book-button"
              onClick={() => handleBooking(room)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
      
      <button 
        className="back-to-home-button"
        onClick={() => setCurrentPage('home')}
      >
        BACK TO HOME
      </button>
    </div>
  );

  const renderContent = () => {
    if (currentPage === 'home') return renderHomePage();
    if (currentPage === 'offers') return renderSpecialOffersPage();
    if (currentPage === 'about') return renderAboutUsPage();
    if (currentPage === 'dashboard') return renderDashboardPage();
    return renderHomePage();
  };

  const renderFooter = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Office Hours</h3>
          <div className="footer-info">
            <p>Monday to Friday</p>
            <p>7:00 am to 6:00 pm</p>
            <p>Saturday</p>
            <p>8:00 am to 8:00 pm</p>
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
          {isLoggedIn ? (
            <>
              <a href="#dashboard" onClick={() => setCurrentPage('dashboard')}>MY ACCOUNT</a>
              <a href="#logout" onClick={handleLogout} className="logout-button">
                LOGOUT <FaSignOutAlt />
              </a>
            </>
          ) : (
            <>
              <a href="#login" onClick={() => setShowLoginModal(true)}>LOGIN</a>
              <a href="#book" className="book-now">BOOK NOW</a>
            </>
          )}
        </div>
      </nav>

      {renderContent()}
      
      {showLoginModal && renderLoginModal()}
      {showRegisterModal && renderRegisterModal()}
    </div>
  );
}

export default App;