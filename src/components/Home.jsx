import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home({ rooms, currentPage, setCurrentPage, isLoggedIn }) {
  const navigate = useNavigate();

  const handleBooking = (room) => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      setCurrentPage('login');
    }
  };

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
            <p className="price">ksh{room.price} per night</p>
            <button onClick={() => handleBooking(room)} className="book-button">
              BOOK NOW
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;