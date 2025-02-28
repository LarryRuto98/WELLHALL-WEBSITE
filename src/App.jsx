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

// Data
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

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderContent = () => {
    switch (currentPage) {
      case 'offers':
        return <SpecialOffers />;
      case 'about':
        return <AboutUs />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Home rooms={rooms} />;
    }
  };

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} />
      {renderContent()}
      {showLoginModal && <Login setShowLoginModal={setShowLoginModal} />}
      {showRegisterModal && <Register setShowRegisterModal={setShowRegisterModal} />}
    </div>
  );
}

export default App;
