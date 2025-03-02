import React from 'react';
import './HomePage.css';

function HomePage({ isLoggedIn }) {
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
    {
      id: 3,
      type: 'Executive Suite',
      image: 'https://source.unsplash.com/400x300/?suite,hotel',
      price: 250,
      description: 'An elegant suite with a separate living area and luxurious bathroom.',
    },
  ];

  return (
    <section className="home-page">
      <h2>Rooms & Suites</h2>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.image} alt={room.type} />
            <h3>{room.type}</h3>
            <p>{room.description}</p>
            <p className="price">${room.price} per night</p>
            {isLoggedIn ? (
              <button className="book-button">Book Now</button>
            ) : (
              <button className="book-button" disabled>Login to Book</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePage;