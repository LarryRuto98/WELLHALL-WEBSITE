import React from 'react';
import './RoomsSection.css';

function RoomsSection({ setShowBookingPage, setSelectedRoom }) {
  const rooms = [
    {
      id: 1,
      type: 'Superior Room',
      image: 'https://source.unsplash.com/400x300/?hotel,room',
      price: 100,
      description: 'A cozy room with a luxurious king-size bed and modern amenities.',
    },
    {
      id: 2,
      type: 'Deluxe Room',
      image: 'https://source.unsplash.com/400x300/?luxury,hotel',
      price: 150,
      description: 'A spacious room with a stunning view and premium amenities.',
    },
  ];

  const handleBookNow = (room) => {
    setSelectedRoom(room); // Set the selected room
    setShowBookingPage(true); // Show the BookingPage
  };

  return (
    <section className="rooms-section">
      <h2>Available Rooms</h2>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.image} alt={room.type} onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            <h3>{room.type}</h3>
            <p>{room.description}</p>
            <p className="price">${room.price} per night</p>
            <button onClick={() => handleBookNow(room)}>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RoomsSection;