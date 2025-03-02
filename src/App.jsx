
// // export default App;
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'; // Import date picker CSS
// import './App.css';

// // Import components
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import SpecialOffers from './components/SpecialOffers';
// import AboutUs from './components/AboutUs';
// import Rooms from './components/Rooms';
// import Reviews from './components/Reviews';
// import Login from './components/Login';
// import Register from './components/Register';

// // Room Data
// const rooms = [
//   {
//     type: 'Luxury Room',
//     image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
//     price: 300,
//     description: 'Spacious luxury room with modern amenities and city view.',
//     maxGuests: 3,
//     bedConfig: '1 QUEEN OR 2 SINGLE BEDS',
//   },
//   {
//     type: 'Deluxe Room',
//     image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
//     price: 200,
//     description: 'Comfortable deluxe room with premium furnishings.',
//     maxGuests: 3,
//     bedConfig: '1 QUEEN OR 2 SINGLE BEDS',
//   },
//   {
//     type: 'Studio Room',
//     image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
//     price: 150,
//     description: 'Cozy studio room perfect for short stays.',
//     maxGuests: 2,
//     bedConfig: '1 QUEEN OR KING BED',
//   },
//   {
//     type: 'Executive Suite',
//     image: 'https://images.unsplash.com/photo-1611892440504-42a792e24c32',
//     price: 400,
//     description: 'Elegant suite with a separate living area and stunning views.',
//     maxGuests: 4,
//     bedConfig: '1 KING BED AND 1 QUEEN SOFA BED',
//   },
//   {
//     type: 'Family Room',
//     image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897',
//     price: 250,
//     description: 'Spacious room designed for families, with extra bedding options.',
//     maxGuests: 5,
//     bedConfig: '2 QUEEN BEDS',
//   },
//   {
//     type: 'Presidential Suite',
//     image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
//     price: 600,
//     description: 'Luxurious suite with a private balcony, jacuzzi, and premium services.',
//     maxGuests: 2,
//     bedConfig: '1 KING BED',
//   },
//   {
//     type: 'Ocean View Room',
//     image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
//     price: 350,
//     description: 'Room with breathtaking ocean views and a private terrace.',
//     maxGuests: 2,
//     bedConfig: '1 QUEEN BED',
//   },
//   {
//     type: 'Garden Cottage',
//     image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
//     price: 280,
//     description: 'Charming cottage surrounded by lush gardens, perfect for a peaceful retreat.',
//     maxGuests: 2,
//     bedConfig: '1 QUEEN BED',
//   },
// ];


// // Special Offers Data
// const specialOffers = [
//   {
//     id: 1,
//     title: 'Dine & Stay Package',
//     image: 'https://images.unsplash.com/photo-1540304453527-62f979142a17',
//     details: [
//       { title: 'Gourmet Dining Experience', description: 'Complimentary welcome drink & dessert' },
//       { title: 'Luxurious stay', description: 'Breakfast buffet for two' },
//       { title: 'A Complementary bottle of wine/champagne', description: 'in the room' },
//       { title: 'Extra Delights', description: 'Free access to hotel pool gym & sauna' },
//     ],
//   },
//   // Add other offers here...
// ];

// // About Us Data
// const aboutUsContent = {
//   title: 'ABOUT US',
//   text: "Nestled in the serene outskirts of Eldoret, in the charming location of Merewet, Wellhall Hotel is your perfect escape from the hustle and bustle of city life. Our hotel blends modern luxury with warm hospitality, offering guests an unforgettable stay surrounded by nature's tranquility. Whether you're visiting for business, leisure, or a romantic getaway, we provide a range of elegantly designed rooms that promise comfort and relaxation. Our exceptional dining experiences, personalized city tour packages, and exclusive dine & stay offers ensure every moment spent with us is truly special.",
//   image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
// };

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [registerName, setRegisterName] = useState('');
//   const [registerEmail, setRegisterEmail] = useState('');
//   const [registerPassword, setRegisterPassword] = useState('');

//   // Booking Modal State
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [showBookingModal, setShowBookingModal] = useState(false);
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);
//   const [numberOfUsers, setNumberOfUsers] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Track room to book after login
//   const [roomToBookAfterLogin, setRoomToBookAfterLogin] = useState(null);

//   // Function to handle booking
//   const handleBooking = (room) => {
//     if (isLoggedIn) {
//       setSelectedRoom(room); // Set the selected room
//       setShowBookingModal(true); // Show the booking modal
//     } else {
//       setRoomToBookAfterLogin(room); // Store the room to book after login
//       setShowLoginModal(true); // Show login modal if user is not logged in
//     }
//   };

//   // Function to close booking modal
//   const handleCloseBookingModal = () => {
//     setShowBookingModal(false);
//     setRoomToBookAfterLogin(null); // Reset the room to book after login
//   };

//   // Function to calculate total price
//   const calculateTotalPrice = () => {
//     if (checkInDate && checkOutDate && selectedRoom) {
//       const numberOfNights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
//       const basePrice = selectedRoom.price * numberOfNights;
//       const userSurcharge = (numberOfUsers - 1) * 20;
//       setTotalPrice(basePrice + userSurcharge);
//     }
//   };

//   // Function to handle booking confirmation
//   const handleConfirmBooking = () => {
//     if (checkInDate && checkOutDate && numberOfUsers > 0) {
//       alert(`Booking confirmed for ${selectedRoom.type} from ${checkInDate.toDateString()} to ${checkOutDate.toDateString()} for ${numberOfUsers} users. Total Price: $${totalPrice}`);
//       setShowBookingModal(false);
//     } else {
//       alert('Please fill out all fields.');
//     }
//   };

//   // Function to handle login
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (loginEmail && loginPassword) {
//       setIsLoggedIn(true);
//       setShowLoginModal(false);
//       setCurrentPage('rooms'); // Redirect to Rooms page after login

//       // Automatically open the booking modal if there's a room to book
//       if (roomToBookAfterLogin) {
//         setSelectedRoom(roomToBookAfterLogin);
//         setShowBookingModal(true);
//         setRoomToBookAfterLogin(null); // Reset the room to book after login
//       }

//       alert('Login successful!');
//     } else {
//       alert('Please enter valid login credentials.');
//     }
//   };

//   // Function to handle registration
//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (registerName && registerEmail && registerPassword) {
//       setIsLoggedIn(true);
//       setShowRegisterModal(false);
//       setCurrentPage('rooms');
//       alert('Registration successful!');
//     } else {
//       alert('Please fill out all fields.');
//     }
//   };

//   // Function to handle logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     alert('Logged out successfully!');
//   };

//   // Function to render content based on current page
//   const renderContent = () => {
//     switch (currentPage) {
//       case 'home':
//         return <Home setCurrentPage={setCurrentPage} />;
//       case 'rooms':
//         return <Rooms rooms={rooms} handleBooking={handleBooking} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
//       case 'offers':
//         return <SpecialOffers specialOffers={specialOffers} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
//       case 'about':
//         return <AboutUs aboutUsContent={aboutUsContent} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
//       case 'reviews':
//         return <Reviews currentPage={currentPage} setCurrentPage={setCurrentPage} />;
//       default:
//         return <Home setCurrentPage={setCurrentPage} />;
//     }
//   };

//   return (
//     <div className="App">
//       <Navbar
//         setCurrentPage={setCurrentPage}
//         isLoggedIn={isLoggedIn}
//         setShowLoginModal={setShowLoginModal}
//         handleLogout={handleLogout}
//         currentPage={currentPage}
//       />
//       {renderContent()}

//       {/* Login Modal */}
//       {showLoginModal && (
//         <Login
//           setShowLoginModal={setShowLoginModal}
//           setShowRegisterModal={setShowRegisterModal}
//           handleLogin={handleLogin}
//           loginEmail={loginEmail}
//           setLoginEmail={setLoginEmail}
//           loginPassword={loginPassword}
//           setLoginPassword={setLoginPassword}
//         />
//       )}

//       {/* Register Modal */}
//       {showRegisterModal && (
//         <Register
//           setShowRegisterModal={setShowRegisterModal}
//           handleRegister={handleRegister}
//           registerName={registerName}
//           setRegisterName={setRegisterName}
//           registerEmail={registerEmail}
//           setRegisterEmail={setRegisterEmail}
//           registerPassword={registerPassword}
//           setRegisterPassword={setRegisterPassword}
//         />
//       )}

//       {/* Booking Modal */}
//       {showBookingModal && selectedRoom && (
//         <div className="booking-modal-overlay">
//           <div className="booking-modal">
//             <button className="close-modal" onClick={handleCloseBookingModal}>×</button>
//             <h2>Book {selectedRoom.type}</h2>
//             <div className="form-group">
//               <label>Check-In Date</label>
//               <DatePicker
//                 selected={checkInDate}
//                 onChange={(date) => setCheckInDate(date)}
//                 minDate={new Date()}
//                 dateFormat="yyyy-MM-dd"
//                 className="date-picker-input"
//               />
//             </div>
//             <div className="form-group">
//               <label>Check-Out Date</label>
//               <DatePicker
//                 selected={checkOutDate}
//                 onChange={(date) => setCheckOutDate(date)}
//                 minDate={checkInDate || new Date()}
//                 dateFormat="yyyy-MM-dd"
//                 className="date-picker-input"
//               />
//             </div>
//             <div className="form-group">
//               <label>Number of Users</label>
//               <input
//                 type="number"
//                 value={numberOfUsers}
//                 onChange={(e) => setNumberOfUsers(Math.max(1, e.target.value))}
//                 min="1"
//               />
//             </div>
//             <div className="form-group">
//               <label>Total Price</label>
//               <p>${totalPrice}</p>
//             </div>
//             <button onClick={calculateTotalPrice}>Calculate Price</button>
//             <button onClick={handleConfirmBooking}>Confirm Booking</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import date picker CSS
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import SpecialOffers from './components/SpecialOffers';
import AboutUs from './components/AboutUs';
import Rooms from './components/Rooms';
import Reviews from './components/Reviews';
import Login from './components/Login';
import Register from './components/Register';

// Room Data
const rooms = [
  {
    type: 'Luxury Room',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
    price: 300,
    description: 'Spacious luxury room with modern amenities and city view.',
    maxGuests: 3,
    bedConfig: '1 QUEEN OR 2 SINGLE BEDS'
  },
  {
    type: 'Deluxe Room',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
    price: 200,
    description: 'Comfortable deluxe room with premium furnishings.',
    maxGuests: 3,
    bedConfig: '1 QUEEN OR 2 SINGLE BEDS'
  },
  {
    type: 'Studio Room',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
    price: 150,
    description: 'Cozy studio room perfect for short stays.',
    maxGuests: 2,
    bedConfig: '1 QUEEN OR KING BED'
  },
  {
    type: 'Executive Suite',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24c32',
    price: 400,
    description: 'Elegant suite with a separate living area and stunning views.',
    maxGuests: 4,
    bedConfig: '1 KING BED AND 1 QUEEN SOFA BED'
  },
  {
    type: 'Family Room',
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897',
    price: 250,
    description: 'Spacious room designed for families, with extra bedding options.',
    maxGuests: 5,
    bedConfig: '2 QUEEN BEDS'
  },
  {
    type: 'Presidential Suite',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
    price: 600,
    description: 'Luxurious suite with a private balcony, jacuzzi, and premium services.',
    maxGuests: 2,
    bedConfig: '1 KING BED'
  },
  {
    type: 'Ocean View Room',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
    price: 350,
    description: 'Room with breathtaking ocean views and a private terrace.',
    maxGuests: 2,
    bedConfig: '1 QUEEN BED'
  },
  {
    type: 'Garden Cottage',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
    price: 280,
    description: 'Charming cottage surrounded by lush gardens, perfect for a peaceful retreat.',
    maxGuests: 2,
    bedConfig: '1 QUEEN BED'
  }
];
// Special Offers Data
const specialOffers = [
  {
    id: 1,
    title: 'Dine & Stay Package',
    image: 'https://images.unsplash.com/photo-1540304453527-62f979142a17',
    details: [
      { title: 'Gourmet Dining Experience', description: 'Complimentary welcome drink & dessert' },
      { title: 'Luxurious stay', description: 'Breakfast buffet for two' },
      { title: 'A Complementary bottle of wine/champagne', description: 'in the room' },
      { title: 'Extra Delights', description: 'Free access to hotel pool gym & sauna' },
    ],
  },
  // Add other offers here...
];

// About Us Data
const aboutUsContent = {
  title: 'ABOUT US',
  text: "Nestled in the serene outskirts of Eldoret, in the charming location of Merewet, Wellhall Hotel is your perfect escape from the hustle and bustle of city life. Our hotel blends modern luxury with warm hospitality, offering guests an unforgettable stay surrounded by nature's tranquility. Whether you're visiting for business, leisure, or a romantic getaway, we provide a range of elegantly designed rooms that promise comfort and relaxation. Our exceptional dining experiences, personalized city tour packages, and exclusive dine & stay offers ensure every moment spent with us is truly special.",
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  // Booking Modal State
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfUsers, setNumberOfUsers] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // Track room to book after login
  const [roomToBookAfterLogin, setRoomToBookAfterLogin] = useState(null);

  // Function to handle booking
  const handleBooking = (room) => {
    if (isLoggedIn) {
      setSelectedRoom(room); // Set the selected room
      setShowBookingModal(true); // Show the booking modal
    } else {
      setRoomToBookAfterLogin(room); // Store the room to book after login
      setShowLoginModal(true); // Show login modal if user is not logged in
    }
  };

  // Function to close booking modal
  const handleCloseBookingModal = () => {
    setShowBookingModal(false);
    setRoomToBookAfterLogin(null); // Reset the room to book after login
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    if (checkInDate && checkOutDate && selectedRoom) {
      const numberOfNights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
      const basePrice = selectedRoom.price * numberOfNights;
      const userSurcharge = (numberOfUsers - 1) * 20;
      setTotalPrice(basePrice + userSurcharge);
    }
  };

  // Automatically calculate total price when check-in, check-out, or number of users changes
  useEffect(() => {
    calculateTotalPrice();
  }, [checkInDate, checkOutDate, numberOfUsers, selectedRoom]);

  // Function to handle booking confirmation
  const handleConfirmBooking = () => {
    if (checkInDate && checkOutDate && numberOfUsers > 0) {
      alert(`Booking confirmed for ${selectedRoom.type} from ${checkInDate.toDateString()} to ${checkOutDate.toDateString()} for ${numberOfUsers} users. Total Price: $${totalPrice}`);
      setShowBookingModal(false);
    } else {
      alert('Please fill out all fields.');
    }
  };

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      setCurrentPage('rooms'); // Redirect to Rooms page after login

      // Automatically open the booking modal if there's a room to book
      if (roomToBookAfterLogin) {
        setSelectedRoom(roomToBookAfterLogin);
        setShowBookingModal(true);
        setRoomToBookAfterLogin(null); // Reset the room to book after login
      }
    } else {
      alert('Please enter valid login credentials.');
    }
  };

  // Function to handle registration
  const handleRegister = (e) => {
    e.preventDefault();
    if (registerName && registerEmail && registerPassword) {
      setIsLoggedIn(true);
      setShowRegisterModal(false);
      setCurrentPage('rooms');
    } else {
      alert('Please fill out all fields.');
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('Logged out successfully!');
  };

  // Function to render content based on current page
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'rooms':
        return <Rooms rooms={rooms} handleBooking={handleBooking} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'offers':
        return <SpecialOffers specialOffers={specialOffers} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutUs aboutUsContent={aboutUsContent} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'reviews':
        return <Reviews currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Navbar
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        setShowLoginModal={setShowLoginModal}
        handleLogout={handleLogout}
        currentPage={currentPage}
      />
      {renderContent()}

      {/* Login Modal */}
      {showLoginModal && (
        <Login
          setShowLoginModal={setShowLoginModal}
          setShowRegisterModal={setShowRegisterModal}
          handleLogin={handleLogin}
          loginEmail={loginEmail}
          setLoginEmail={setLoginEmail}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
        />
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <Register
          setShowRegisterModal={setShowRegisterModal}
          handleRegister={handleRegister}
          registerName={registerName}
          setRegisterName={setRegisterName}
          registerEmail={registerEmail}
          setRegisterEmail={setRegisterEmail}
          registerPassword={registerPassword}
          setRegisterPassword={setRegisterPassword}
        />
      )}

      {/* Booking Modal */}
      {showBookingModal && selectedRoom && (
        <div className="booking-modal-overlay">
          <div className="booking-modal">
            <button className="close-modal" onClick={handleCloseBookingModal}>×</button>
            <h2>Book {selectedRoom.type}</h2>
            <div className="form-group">
              <label>Check-In Date</label>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                minDate={new Date()}
                dateFormat="yyyy-MM-dd"
                className="date-picker-input"
              />
            </div>
            <div className="form-group">
              <label>Check-Out Date</label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                minDate={checkInDate || new Date()}
                dateFormat="yyyy-MM-dd"
                className="date-picker-input"
              />
            </div>
            <div className="form-group">
              <label>Number of Users</label>
              <input
                type="number"
                value={numberOfUsers}
                onChange={(e) => setNumberOfUsers(Math.max(1, e.target.value))}
                min="1"
              />
            </div>
            <div className="form-group">
              <label>Total Price</label>
              <p>${totalPrice}</p>
            </div>
            <button onClick={handleConfirmBooking}>Confirm Booking</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;