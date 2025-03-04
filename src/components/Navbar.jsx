import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ isLoggedIn, setCurrentPage, setShowLoginModal, handleLogout, user }) {
  return (
    <nav className="navbar">
      <Link to="/" className="hotel-title" onClick={() => setCurrentPage('welcome')}>
        THE WELLHALL HOTEL
      </Link>
      <div className="nav-links">
        <Link to="/rooms" onClick={() => setCurrentPage('home')}>ROOMS</Link>
        <Link to="/offers" onClick={() => setCurrentPage('offers')}>OFFERS</Link>
        <Link to="/about" onClick={() => setCurrentPage('about')}>ABOUT</Link>
        
        {isLoggedIn ? (
          <>
            <div className="user-dropdown">
              <button className="user-button">
                <FaUser /> {user.name.split(' ')[0]}
              </button>
              <div className="dropdown-content">
                <Link to="/dashboard" onClick={() => setCurrentPage('dashboard')}>
                  Dashboard
                </Link>
                <Link to="/my-bookings" onClick={() => setCurrentPage('my-bookings')}>
                  <FaCalendarAlt /> My Bookings
                </Link>
                <Link to="/" onClick={handleLogout} className="logout-option">
                  <FaSignOutAlt /> Logout
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <a href="#login" onClick={() => setShowLoginModal(true)}>LOGIN</a>
            <a href="#book" className="book-now" onClick={() => setShowLoginModal(true)}>BOOK NOW</a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;