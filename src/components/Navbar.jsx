import { FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ isLoggedIn, setCurrentPage, setShowLoginModal, handleLogout }) {
  return (
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
  );
}

export default Navbar;