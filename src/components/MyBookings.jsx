import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaHotel, FaTrash, FaHome } from 'react-icons/fa';
import './MyBookings.css';

function MyBookings({ bookings, onCancelBooking, setCurrentPage }) {
  const navigate = useNavigate();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleCancelClick = (booking) => {
    setSelectedBooking(booking);
    setShowCancelModal(true);
  };

  const confirmCancellation = () => {
    onCancelBooking(selectedBooking.id);
    setShowCancelModal(false);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    navigate('/rooms');
  };

  return (
    <div className="my-bookings-container">
      <div className="my-bookings-header">
        <h1>My Bookings</h1>
        <p>View and manage your bookings at The Wellhall Hotel</p>
      </div>
      
      <div className="my-bookings-content">
        {bookings.length === 0 ? (
          <div className="no-bookings">
            <FaCalendarAlt className="no-bookings-icon" />
            <h2>No Bookings Found</h2>
            <p>You don't have any bookings yet. Start by booking a room.</p>
            <button className="book-now-button" onClick={handleBackToHome}>
              Book a Room
            </button>
          </div>
        ) : (
          <div className="bookings-list">
            {bookings.map((booking) => (
              <div 
                key={booking.id} 
                className={`booking-card ${booking.status === 'cancelled' ? 'cancelled' : ''}`}
              >
                {booking.status === 'cancelled' && (
                  <div className="cancelled-badge">Cancelled</div>
                )}
                
                <div className="booking-image">
                  <img src={booking.room.image} alt={booking.room.type} />
                </div>
                
                <div className="booking-details">
                  <h2>{booking.room.type}</h2>
                  
                  <div className="booking-info">
                    <div className="info-group">
                      <FaCalendarAlt className="info-icon" />
                      <div>
                        <p className="info-label">Stay Dates</p>
                        <p>{formatDate(booking.checkIn)} - {formatDate(booking.checkOut)}</p>
                      </div>
                    </div>
                    
                    <div className="info-group">
                      <FaHotel className="info-icon" />
                      <div>
                        <p className="info-label">Room Details</p>
                        <p>{booking.room.maxGuests} Guests / {booking.room.bedConfig}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="booking-status">
                    <p className="status-label">Status:</p>
                    <p className={`status-value ${booking.status}`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </p>
                  </div>
                </div>
                
                <div className="booking-actions">
                  {booking.status !== 'cancelled' && (
                    <button 
                      className="cancel-booking-button"
                      onClick={() => handleCancelClick(booking)}
                    >
                      <FaTrash /> Cancel Booking
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        <button className="back-to-home-button" onClick={handleBackToHome}>
          <FaHome /> Back to Home
        </button>
      </div>
      
      {showCancelModal && (
        <div className="modal-overlay">
          <div className="cancel-modal">
            <h2>Cancel Booking</h2>
            <p>Are you sure you want to cancel your booking for:</p>
            <div className="cancel-booking-details">
              <h3>{selectedBooking.room.type}</h3>
              <p>{formatDate(selectedBooking.checkIn)} - {formatDate(selectedBooking.checkOut)}</p>
            </div>
            <p className="cancellation-warning">
              Please note that cancellation might be subject to our cancellation policy.
            </p>
            <div className="modal-actions">
              <button 
                className="confirm-cancel-button"
                onClick={confirmCancellation}
              >
                Yes, Cancel Booking
              </button>
              <button 
                className="keep-booking-button"
                onClick={() => setShowCancelModal(false)}
              >
                No, Keep Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyBookings;