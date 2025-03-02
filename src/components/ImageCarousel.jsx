import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';

const images = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945', // Swimming pool
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39', // Hotel room
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791', // Luxury dining area
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791', // Outdoor seating area
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791', // Spa area
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791', // Conference room
];

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true, // Ensure the carousel loops infinitely
    speed: 1000, // Transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Time between transitions (3 seconds)
    pauseOnHover: true, // Pause on hover
    fade: true, // Add a fade effect
    cssEase: 'linear', // Smooth transition
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Hotel ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;