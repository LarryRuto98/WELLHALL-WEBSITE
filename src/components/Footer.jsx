
import React from 'react
import { FaTwitter, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

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

          <h3 className="footer-title">Office Hours</h3>
          <div className="footer-info">
            <p>Monday to Friday</p>
            <p>9:00 am to 6:00 pm</p>
            <p>Saturday</p>
            <p>9:00 am to 12:00 noon</p>
          </div>
        </div>
        
        <div className="footer-section">
          {/* Empty section for layout */}
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Reservations Office</h3>
          <div className="footer-info">
            <p><FaMapMarkerAlt /> Kenyatta Street, Kikao 64 Building</p>
            <p><FaPhone /> +254703647000</p>
            <p><FaEnvelope /> Thewellhallhotel@gmail.com</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Get Social</h3>
          <div className="social-icons">
            <a href="#facebook" className="social-icon">
              <FaFacebook />
            </a>
            <a href="#twitter" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#instagram" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;