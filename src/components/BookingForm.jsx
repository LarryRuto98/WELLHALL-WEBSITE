import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaUsers, FaArrowRight } from 'react-icons/fa';
import './BookingForm.css';

function BookingForm({ room, onDateSelection, bookingDates, setCurrentPage }) {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState(bookingDates.checkIn || null);
  const [checkOut, setCheckOut] = useState(bookingDates.checkOut || null);
  const [guests, setGuests] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');
  const [errors, setErrors] = useState({});

  const handleCheckInChange = (date) => {
    setCheckIn(date);
    if (checkOut && date >= checkOut) {
      setCheckOut(null);
    }
  };

  const handleCheckOutChange = (date) => {
    setCheckOut(date);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!checkOut) newErrors.checkOut = 'Check-out date is required';
    
    if (checkIn && checkOut) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (checkIn < today) {
        newErrors.checkIn = 'Check-in date cannot be in the past';
      }
      
      if (checkOut <= checkIn) {
        newErrors.checkOut = 'Check-out date must be after check-in date';
      }
    }
    
    if (guests < 1) newErrors.guests = 'At least 1 guest is required';
    if (guests > room.maxGuests) newErrors.guests = `Maximum ${room.maxGuests} guests allowed`;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onDateSelection({ checkIn, checkOut });
      setCurrentPage('payment');
      navigate('/payment');
    }
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = Math.abs(checkOut - checkIn);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    return nights * room.price;
  };

  return (
    <div className="booking-form-container">
      <div className="booking-form-header">
        <h1>Book Your Stay</h1>
        <p>Complete the form below to book your stay at The Wellhall Hotel</p>
      </div>
      
      <div className="booking-form-content">
        <div className="booking-form-room-details">
          <img src={room.image} alt={room.type} className="booking-room-image" />
          <div className="booking-room-info">
            <h2>{room.type}</h2>
            <p className="room-description">{room.description}</p>
            <p className="room-price">Ksh{room.price} per night</p>
            <p className="room-capacity">Max {room.maxGuests} Guests / {room.bedConfig}</p>
            
            <div className="room-amenities">
              <h3>Amenities</h3>
              <ul>
                {room.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              <FaCalendarAlt /> Check-in Date
            </label>
            <DatePicker
              selected={checkIn}
              onChange={handleCheckInChange}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={new Date()}
              placeholderText="Select check-in date"
              className="date-picker"
            />
            {errors.checkIn && <span className="error-message">{errors.checkIn}</span>}
          </div>
          
          <div className="form-group">
            <label>
              <FaCalendarAlt /> Check-out Date
            </label>
            <DatePicker
              selected={checkOut}
              onChange={handleCheckOutChange}
              selectsEnd
              startDate={checkIn}
              endDate={checkOut}
              minDate={checkIn || new Date()}
              placeholderText="Select check-out date"
              className="date-picker"
              disabled={!checkIn}
            />
            {errors.checkOut && <span className="error-message">{errors.checkOut}</span>}
          </div>
          
          <div className="form-group">
            <label>
              <FaUsers /> Number of Guests
            </label>
            <select 
              value={guests} 
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="guests-select"
            >
              {[...Array(room.maxGuests)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
            {errors.guests && <span className="error-message">{errors.guests}</span>}
          </div>
          
          <div className="form-group">
            <label>Special Requests (Optional)</label>
            <textarea 
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="Any special requests or requirements?"
              className="special-requests"
            />
          </div>
          
          <div className="booking-summary">
            <h3>Booking Summary</h3>
            <div className="summary-item">
              <span>Room Type:</span>
              <span>{room.type}</span>
            </div>
            <div className="summary-item">
              <span>Number of Nights:</span>
              <span>{calculateNights()}</span>
            </div>
            <div className="summary-item">
              <span>Price per Night:</span>
              <span>${room.price}</span>
            </div>
            <div className="summary-item total">
              <span>Total:</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>
          
          <button type="submit" className="proceed-button">
            Proceed to Payment <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;