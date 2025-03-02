import React, { useState } from 'react';
import './BookingPage.css';

function BookingPage({ selectedRoom, setShowBookingPage, user }) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!checkInDate || !checkOutDate || !numberOfGuests || !phoneNumber) {
      setError('Please fill in all fields.');
      return;
    }

    // Validate check-in and check-out dates
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    if (checkOut <= checkIn) {
      setError('Check-out date must be after check-in date.');
      return;
    }

    // Calculate total price
    const numberOfNights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    const totalPrice = selectedRoom.price * numberOfNights * numberOfGuests;

    try {
      // Simulate MPesa payment (replace with actual API call)
      const paymentResponse = await fetch('http://localhost:5000/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, amount: totalPrice }),
      });
      const paymentData = await paymentResponse.json();

      if (!paymentData.success) {
        setError('Payment failed. Please try again.');
        return;
      }

      // Payment successful, store booking details
      const bookingResponse = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomId: selectedRoom.id,
          userId: user.id, // Use the logged-in user's ID
          checkInDate,
          checkOutDate,
          numberOfGuests,
          totalPrice,
        }),
      });
      const bookingData = await bookingResponse.json();

      if (bookingData.success) {
        setPaymentSuccess(true); // Show success message
        setError(''); // Clear any previous errors
      } else {
        setError('Failed to store booking details.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <section className="booking-page">
      <h2>Book Your Stay</h2>
      {selectedRoom && (
        <div className="selected-room">
          <h3>{selectedRoom.type}</h3>
          <img src={selectedRoom.image} alt={selectedRoom.type} />
          <p>{selectedRoom.description}</p>
          <p className="price">${selectedRoom.price} per night</p>
        </div>
      )}

      {!paymentSuccess ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Check-in Date</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]} // Disable past dates
              required
            />
          </div>
          <div className="form-group">
            <label>Check-out Date</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              min={checkInDate || new Date().toISOString().split('T')[0]} // Disable dates before check-in
              required
            />
          </div>
          <div className="form-group">
            <label>Number of Guests</label>
            <input
              type="number"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              min="1"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number (for MPesa payment)</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g., 254712345678"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">
            Confirm Booking
          </button>
        </form>
      ) : (
        <div className="success-message">
          <h3>Booking Successful!</h3>
          <p>Your booking details have been saved.</p>
          <button onClick={() => setShowBookingPage(false)}>Back to Rooms</button>
        </div>
      )}
    </section>
  );
}

export default BookingPage;