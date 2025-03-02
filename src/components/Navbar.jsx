
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import your custom CSS file

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login status
  const [user, setUser] = useState(null); // Store user data
  const navigate = useNavigate();

  // Check if the user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const userData = JSON.parse(localStorage.getItem('user'));
      setUser(userData);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          The Wellhall Hotel
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>

        {/* Navbar Links */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/rooms" className="nav-links">
              Rooms
            </Link>
          </li>
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link to="/bookings" className="nav-links">
                  My Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-links">
                  Profile
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Login/Logout Button */}
        <div className="nav-auth">
          {isLoggedIn ? (
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="login-button">
              Login
            </Link>
          )}
        </div>

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