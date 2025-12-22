import { useState } from 'react';
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
        <div className="header-logo">ISII Logo</div>
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
          <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="#about" className="nav-link" onClick={closeMenu}>About Us</a>
          <a href="#capabilities" className="nav-link" onClick={closeMenu}>Capabilities</a>
          <a href="#engage" className="nav-link" onClick={closeMenu}>Engage</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

