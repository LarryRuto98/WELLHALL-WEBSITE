import { FaSearch } from 'react-icons/fa';
import './Dashboard.css';

function Dashboard({ rooms, searchQuery, setSearchQuery, handleBooking, setCurrentPage }) {
  const filteredRooms = searchQuery 
    ? rooms.filter(room => 
        room.type.toLowerCase().includes(searchQuery.toLowerCase()) || 
        room.description.toLowerCase().includes(searchQuery.toLowerCase()))
    : rooms;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">PROCEED TO BOOK ROOMS</h1>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="search room type or amenities" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            <FaSearch /> Search
          </button>
        </div>
      </div>
      
      <div className="dashboard-rooms">
        {filteredRooms.map((room, index) => (
          <div key={index} className="dashboard-room-card">
            <img src={room.image} alt={room.type} className="dashboard-room-image" />
            <h2 className="dashboard-room-title">{room.type}</h2>
            <p className="dashboard-room-details">MAX {room.maxGuests} GUESTS / {room.bedConfig}</p>
            <button 
              className="dashboard-book-button"
              onClick={() => handleBooking(room)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
      
      <button 
        className="back-to-home-button"
        onClick={() => setCurrentPage('home')}
      >
        BACK TO HOME
      </button>
    </div>
  );
}

export default Dashboard;