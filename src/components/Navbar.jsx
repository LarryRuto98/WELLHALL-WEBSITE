// import { FaSignOutAlt } from 'react-icons/fa';
// import './Navbar.css';

// function Navbar({ isLoggedIn, setCurrentPage, setShowLoginModal, handleLogout }) {
//   return (
//     <nav className="navbar">
//       <h1 className="hotel-title">THE WELLHALL HOTEL</h1>
//       <div className="nav-links">
//         <a href="#home" onClick={() => setCurrentPage('home')}>HOME</a>
//         {isLoggedIn ? (
//           <>
//             <a href="#dashboard" onClick={() => setCurrentPage('dashboard')}>MY ACCOUNT</a>
//             <a href="#logout" onClick={handleLogout} className="logout-button">
//               LOGOUT <FaSignOutAlt />
//             </a>
//           </>
//         ) : (
//           <>
//             <a href="#login" onClick={() => setShowLoginModal(true)}>LOGIN</a>
//             <a href="#book" className="book-now">BOOK NOW</a>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import React from 'react';
// import './Navbar.css'; // Add your CSS for styling the Navbar

// function Navbar({ setCurrentPage, isLoggedIn, setShowLoginModal, handleLogout }) {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <h1>Wellhall Hotel</h1>
//       </div>
//       <div className="navbar-links">
//         <button className="nav-link" onClick={() => setCurrentPage('home')}>
//           Home
//         </button>
//         <button className="nav-link" onClick={() => setCurrentPage('rooms')}>
//           Rooms
//         </button>
//         <button className="nav-link" onClick={() => setCurrentPage('offers')}>
//           Special Offers
//         </button>
//         <button className="nav-link" onClick={() => setCurrentPage('about')}>
//           About Us
//         </button>
//         <button className="nav-link" onClick={() => setCurrentPage('reviews')}>
//           Reviews
//         </button>
//       </div>
//       <div className="navbar-auth">
//         {isLoggedIn ? (
//           <button className="nav-link" onClick={handleLogout}>
//             Logout
//           </button>
//         ) : (
//           <button className="nav-link" onClick={() => setShowLoginModal(true)}>
//             Login
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import './Navbar.css'; // Add your CSS for styling the Navbar

function Navbar({ setCurrentPage, isLoggedIn, setShowLoginModal, handleLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Wellhall Hotel</h1>
      </div>
      <div className="navbar-links">
        <button className="nav-link" onClick={() => setCurrentPage('home')}>
          Home
        </button>
        <button className="nav-link" onClick={() => setCurrentPage('rooms')}>
          Rooms
        </button>
        <button className="nav-link" onClick={() => setCurrentPage('offers')}>
          Special Offers
        </button>
        <button className="nav-link" onClick={() => setCurrentPage('about')}>
          About Us
        </button>
        <button className="nav-link" onClick={() => setCurrentPage('reviews')}>
          Reviews
        </button>
      </div>
      <div className="navbar-auth">
        {isLoggedIn ? (
          <button className="nav-link" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="nav-link" onClick={() => setShowLoginModal(true)}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;