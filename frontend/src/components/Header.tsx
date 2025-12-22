import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">ISII Logo</Link>
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link>
          <Link to="/capabilities" className="nav-link" onClick={closeMenu}>Capabilities</Link>
          <a href="#engage" className="nav-link" onClick={closeMenu}>Engage</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

