import React, { useState } from 'react';
import Navbar from './Navbar';
import LoginSignUp from './LoginSignUp';
import RoomsSection from './RoomsSection';
import BookingPage from './BookingPage';
import './SecondPage.css';

function SecondPage({ isLoggedIn, user, handleLogin, handleSignUp, handleLogout, error }) {
  const [showLoginSignUp, setShowLoginSignUp] = useState(!isLoggedIn);
  const [showBookingPage, setShowBookingPage] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleUserUpdate = (userData) => {
    if (userData) {
      setShowLoginSignUp(false);
    }
  };

  return (
    <div className="second-page">
      <Navbar
        isLoggedIn={isLoggedIn}
        user={user}
        handleLogout={handleLogout}
        setShowLoginSignUp={setShowLoginSignUp}
        showLoginSignUp={showLoginSignUp}
      />

      {!isLoggedIn && showLoginSignUp && (
        <div className="overlay">
          <div className="modal-content">
            <LoginSignUp
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              setShowLoginSignUp={setShowLoginSignUp}
              setUser={handleUserUpdate}
              error={error}
            />
          </div>
        </div>
      )}

      {isLoggedIn && !showBookingPage && (
        <RoomsSection
          setShowBookingPage={setShowBookingPage}
          setSelectedRoom={setSelectedRoom}
        />
      )}

      {isLoggedIn && showBookingPage && (
        <BookingPage
          selectedRoom={selectedRoom}
          setShowBookingPage={setShowBookingPage}
          user={user}
        />
      )}
    </div>
  );
}

export default SecondPage;