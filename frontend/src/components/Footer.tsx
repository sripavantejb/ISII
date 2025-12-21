import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Top-Left: Logo and Social */}
          <div className="footer-branding">
            <div className="footer-logo">
              <div className="logo-text">ISII</div>
            </div>
            <div className="footer-social-container">
              <p className="footer-social-text">Please connect with us on:</p>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <div className="social-icon">in</div>
              </a>
            </div>
          </div>

          {/* Middle-Left: Navigation Column 1 */}
          <div className="footer-nav-column">
            <a href="#reports" className="footer-link">Reports</a>
            <a href="#pivotal-thinking" className="footer-link">Pivotal Thinking</a>
            <a href="#strategic-counsel" className="footer-link">Strategic Counsel</a>
            <a href="#interventions" className="footer-link">Systemic Intervention and Strategic Investment</a>
            <a href="#capabilities" className="footer-link">Capabilities</a>
            <a href="#resources" className="footer-link">Resources</a>
          </div>

          {/* Middle-Right: Navigation Column 2 */}
          <div className="footer-nav-column">
            <a href="#about" className="footer-link">About</a>
            <a href="#institutions" className="footer-link">Institutions</a>
            <a href="#people" className="footer-link">People</a>
            <a href="#news" className="footer-link">News</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>

        {/* Bottom: Copyright and Legal */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">Copyright © 2025 ISII</p>
            <div className="footer-legal">
              <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
              <span className="footer-divider-vertical">|</span>
              <a href="#terms" className="footer-legal-link">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

