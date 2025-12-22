import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="engage" className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Left: Logo */}
          <div className="footer-left">
            <div className="footer-logo-text">ISII</div>
          </div>

          {/* Right: Quick Links */}
          <div className="footer-middle">
            <h3 className="footer-quick-links-heading">Quick Links</h3>
            <nav className="footer-quick-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/capabilities" className="footer-link">Capabilities</Link>
              <a href="#engage" className="footer-link">Engage</a>
            </nav>
          </div>
        </div>

        {/* Horizontal Separator */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">Copyright © 2025 ISII</p>
          <div className="footer-legal">
            <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
            <span className="footer-divider-vertical">|</span>
            <a href="#terms" className="footer-legal-link">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

