import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#dining">Dining</a></li>
            <li><a href="#health-club">Health Club</a></li>
            <li><a href="#special-offers">Special Offers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <ul>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: reservation@wellhallhotel.com</p>
          <p>Phone: +254 758 111 444</p>
          <p>Address: Malonie Ave, Nairobi, Kenya</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 The Wellhall Hotel. Designed & Developed by Projfit Digital.</p>
      </div>
    </footer>
  );
}

export default Footer;