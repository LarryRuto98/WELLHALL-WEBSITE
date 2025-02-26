import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaTwitter, FaInstagram, FaFacebook, FaSearch } from 'react-icons/fa';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

const rooms = [
  {
    type: 'Luxury Room',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
    price: 300,
    description: 'Spacious luxury room with modern amenities and city view.'
  },
  {
    type: 'Deluxe Room',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
    price: 200,
    description: 'Comfortable deluxe room with premium furnishings.'
  },
  {
    type: 'Studio Room',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
    price: 150,
    description: 'Cozy studio room perfect for short stays.'
  }
];

function App() {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBooking = (room) => {
    setSelectedRoom(room);
   
    alert(`Booking ${room.type} from ${checkIn.toDateString()} to ${checkOut.toDateString()}`);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1 className="hotel-title">THE WELLHALL HOTEL</h1>
        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#login">LOGIN</a>
          <a href="#book" className="book-now">BOOK NOW</a>
        </div>
      </nav>

      <div className="search-container">
        <div className="date-picker-container">
          <div className="date-picker">
            <label>CHECK IN</label>
            <DatePicker
              selected={checkIn}
              onChange={date => setCheckIn(date)}
              className="date-input"
            />
          </div>
          <div className="date-picker">
            <label>CHECK OUT</label>
            <DatePicker
              selected={checkOut}
              onChange={date => setCheckOut(date)}
              className="date-input"
            />
          </div>
          <button className="search-button">
            <FaSearch /> Search
          </button>
        </div>
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

      <footer className="footer">
        <div className="contact-info">
          <p>Thewellhallhotel@gmail.com</p>
          <p>+254787765487</p>
        </div>
        
        <div className="business-hours">
          <h3>Business Hours</h3>
          <p>MON - FRIDAY</p>
          <p>WEEKENDS -</p>
        </div>

        <div className="social-links">
          <h3>Get Social</h3>
          <div className="social-icons">
            <FaTwitter />
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;