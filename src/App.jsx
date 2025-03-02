
import React, { useState } from 'react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import { loginUser, registerUser } from './services/api';
import './App.css';

function App() {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleLogin = async (email, password) => {
    setError('');
    try {
      const data = await loginUser(email, password);
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        setUser(data.user);
        setIsLoggedIn(true);
        setShowSecondPage(true);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleSignUp = async (name, email, password) => {
    setError('');
    try {
      const data = await registerUser(name, email, password);
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        setUser(data.user);
        setIsLoggedIn(true);
        setShowSecondPage(true);
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsLoggedIn(false);
    setShowSecondPage(false);
=======
import { useState } from 'react';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import SpecialOffers from './components/SpecialOffers';
import AboutUs from './components/AboutUs';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

// Room Data
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
    type: 'Studio Room',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
    price: 150,
    description: 'Cozy studio room perfect for short stays.',
    maxGuests: 2,
    bedConfig: '1 QUEEN OR KING BED'
  }
];

// Special Offers Data
const specialOffers = [
  {
    id: 1,
    title: 'Dine & Stay Package',
    image: 'https://images.unsplash.com/photo-1540304453527-62f979142a17',
    details: [
      { title: 'Gourmet Dining Experience', description: 'Complimentary welcome drink & dessert' },
      { title: 'Luxurious stay', description: 'Breakfast buffet for two' },
      { title: 'A Complementary bottle of wine/champagne', description: 'in the room' },
      { title: 'Extra Delights', description: 'Free access to hotel pool gym & sauna' }
    ]
  },
  {
    id: 2,
    title: 'City Tour Package',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
    details: [
      { title: 'City Tour Experience', description: 'Guided half-day/full day city tour with experienced guide' },
      { title: 'Extra Delights', description: 'Airport pick-up & drop-off service' },
      { title: '', description: 'Complimentary bike rental for day exploration' },
      { title: '', description: 'Airport Transfers available upon request' }
    ]
  }
];

// About Us Data
const aboutUsContent = {
  title: 'ABOUT US',
  text: "Nestled in the serene outskirts of Eldoret, in the charming location of Merewet, Wellhall Hotel is your perfect escape from the hustle and bustle of city life. Our hotel blends modern luxury with warm hospitality, offering guests an unforgettable stay surrounded by nature's tranquility. Whether you're visiting for business, leisure, or a romantic getaway, we provide a range of elegantly designed rooms that promise comfort and relaxation. Our exceptional dining experiences, personalized city tour packages, and exclusive dine & stay offers ensure every moment spent with us is truly special.",
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleBooking = (room) => {
    if (isLoggedIn) {
      alert(`Booking ${room.type}`);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleBookOffer = (offer) => {
    if (isLoggedIn) {
      alert(`Booking ${offer.title} package`);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      alert('Login successful!');
    } else {
      alert('Please enter valid login credentials.');
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'offers':
        return <SpecialOffers specialOffers={specialOffers} handleBookOffer={handleBookOffer} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutUs aboutUsContent={aboutUsContent} />;
      case 'dashboard':
        return <Dashboard rooms={rooms} searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleBooking={handleBooking} setCurrentPage={setCurrentPage} />;
      default:
        return <Home rooms={rooms} handleBooking={handleBooking} currentPage={currentPage} setCurrentPage={setCurrentPage} />;

        
      {!showSecondPage ? (
        <FirstPage
          setShowSecondPage={setShowSecondPage}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          error={error}
        />
      ) : (
        <SecondPage
          isLoggedIn={isLoggedIn}
          user={user}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          handleLogout={handleLogout}
          error={error}

      <Navbar 
        setCurrentPage={setCurrentPage} 
        isLoggedIn={isLoggedIn} 
        setShowLoginModal={setShowLoginModal} 
        handleLogout={() => setIsLoggedIn(false)} 
      />
      {renderContent()}
      {showLoginModal && (
        <Login 
          setShowLoginModal={setShowLoginModal} 
          setShowRegisterModal={setShowRegisterModal} 
          handleLogin={handleLogin} 
          loginEmail={loginEmail} 
          setLoginEmail={setLoginEmail} 
          loginPassword={loginPassword} 
          setLoginPassword={setLoginPassword} 
        />
      )}
      {showRegisterModal && (
        <Register 
          setShowRegisterModal={setShowRegisterModal} 
        />
      )}
    </div>
  );
}

export default App;
