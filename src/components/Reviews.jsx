
import { FaArrowLeft} from 'react-icons/fa';
import { useState, useEffect } from 'react'; // Import useEffect
import './Reviews.css';

function Reviews({ currentPage, setCurrentPage }) {
  // Load reviews from local storage on component mount
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : [
      {
        id: 1,
        name: 'John Doe',
        rating: 5,
        comment: 'Amazing stay! The room was spacious and the service was excellent.',
      },
      {
        id: 2,
        name: 'Jane Smith',
        rating: 4,
        comment: 'Great location and friendly staff. Would definitely recommend!',
      },
      {
        id: 3,
        name: 'Alice Johnson',
        rating: 5,
        comment: 'Perfect getaway. The hotel exceeded all our expectations.',
      },
    ];
  });

  // Save reviews to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  // State to manage the form input fields
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    comment: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      const reviewToAdd = {
        id: reviews.length + 1, // Generate a new ID
        name: newReview.name,
        rating: parseInt(newReview.rating, 10), // Convert rating to a number
        comment: newReview.comment,
      };
      setReviews([...reviews, reviewToAdd]); // Add the new review to the list
      setNewReview({ name: '', rating: 0, comment: '' }); // Reset the form
    } else {
      alert('Please fill out all fields before submitting.');
    }
  };

  return (
    <div className="reviews-container">
      <h1 className="reviews-title">Customer Reviews</h1>

      {/* Display existing reviews */}
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <h3 className="review-name">{review.name}</h3>
              <div className="review-rating">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Section for adding a new review */}
      <div className="add-review-section">
        <h2>Feel Free to Share Your Experience</h2>
        <div className="add-review-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                name="rating"
                value={newReview.rating}
                onChange={handleInputChange}
                required
              >
                <option value={0}>Select a rating</option>
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
              <textarea
                id="comment"
                name="comment"
                value={newReview.comment}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="submit-review-button">
              Submit Review
            </button>
          </form>
        </div>
      </div>

      
      
    </div>
  );
}

export default Reviews;
// import { useState, useEffect } from 'react';
// import './Reviews.css';

// function Reviews({ setCurrentPage }) {
//   const [reviews, setReviews] = useState(() => {
//     const savedReviews = localStorage.getItem('reviews');
//     return savedReviews ? JSON.parse(savedReviews) : [
//       {
//         id: 1,
//         name: 'John Doe',
//         rating: 5,
//         comment: 'Amazing stay! The room was spacious and the service was excellent.',
//       },
//       {
//         id: 2,
//         name: 'Jane Smith',
//         rating: 4,
//         comment: 'Great location and friendly staff. Would definitely recommend!',
//       },
//       {
//         id: 3,
//         name: 'Alice Johnson',
//         rating: 5,
//         comment: 'Perfect getaway. The hotel exceeded all our expectations.',
//       },
//     ];
//   });

//   const [newReview, setNewReview] = useState({
//     name: '',
//     rating: 0,
//     comment: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewReview({
//       ...newReview,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newReview.name && newReview.rating && newReview.comment) {
//       const reviewToAdd = {
//         id: reviews.length + 1,
//         name: newReview.name,
//         rating: parseInt(newReview.rating, 10),
//         comment: newReview.comment,
//       };
//       setReviews([...reviews, reviewToAdd]);
//       setNewReview({ name: '', rating: 0, comment: '' });
//     } else {
//       alert('Please fill out all fields before submitting.');
//     }
//   };

//   return (
//     <div className="reviews-container">
//       <h1 className="reviews-title">Customer Reviews</h1>

//       <div className="reviews-grid">
//         {reviews.map((review) => (
//           <div key={review.id} className="review-card">
//             <div className="review-header">
//               <h3 className="review-name">{review.name}</h3>
//               <div className="review-rating">
//                 {Array.from({ length: review.rating }, (_, i) => (
//                   <span key={i} className="star">⭐</span>
//                 ))}
//               </div>
//             </div>
//             <p className="review-comment">{review.comment}</p>
//           </div>
//         ))}
//       </div>

//       <div className="add-review-section">
//         <h2>Feel Free to Share Your Experience</h2>
//         <div className="add-review-form">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={newReview.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="rating">Rating:</label>
//               <select
//                 id="rating"
//                 name="rating"
//                 value={newReview.rating}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value={0}>Select a rating</option>
//                 <option value={1}>1 Star</option>
//                 <option value={2}>2 Stars</option>
//                 <option value={3}>3 Stars</option>
//                 <option value={4}>4 Stars</option>
//                 <option value={5}>5 Stars</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="comment">Comment:</label>
//               <textarea
//                 id="comment"
//                 name="comment"
//                 value={newReview.comment}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <button type="submit" className="submit-review-button">
//               Submit Review
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="page-navigation">
//         <button onClick={() => setCurrentPage('home')}>Rooms</button>
//         <button onClick={() => setCurrentPage('offers')}>Special Offers</button>
//         <button onClick={() => setCurrentPage('about')}>About Us</button>
//         <button onClick={() => setCurrentPage('reviews')}>Reviews</button>
//       </div>
//     </div>
//   );
// }

// export default Reviews;