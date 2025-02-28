import { FaTwitter, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
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