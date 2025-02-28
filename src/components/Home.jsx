import { FaArrowRight } from 'react-icons/fa';
import './Home.css';

function Home({ rooms, handleBooking, currentPage, setCurrentPage }) {
  return (
    <>
      <div className="rooms-title-container">
        <h1 className="rooms-title">Rooms & Suites</h1>
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
      
      <div className="page-navigation">
        <button 
          className={`page-button ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          Rooms
        </button>
        <button 
          className={`page-button ${currentPage === 'offers' ? 'active' : ''}`}
          onClick={() => setCurrentPage('offers')}
        >
          Special Offers <FaArrowRight />
        </button>
        <button 
          className={`page-button ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => setCurrentPage('about')}
        >
          About Us <FaArrowRight />
        </button>
      </div>
    </>
  );
}

export default Home;