import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [capabilitiesDropdownOpen, setCapabilitiesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setCapabilitiesDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100; // Add small offset for smoother transition
        setIsScrolled(scrollPosition > heroBottom);
      } else {
        // If hero section doesn't exist (e.g., on other pages), default to scrolled state
        setIsScrolled(window.scrollY > 100);
      }
    };

    // Check initial scroll position
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="header-logo">ISII</Link>
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
          <div 
            className="nav-item-with-dropdown"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <span className="nav-link nav-link-dropdown">About Us</span>
            <div className={`dropdown-menu ${aboutDropdownOpen ? 'open' : ''}`}>
              <Link to="/about/mission" className="dropdown-item" onClick={closeMenu}>Our Mission</Link>
            </div>
          </div>
          <div 
            className="nav-item-with-dropdown"
            onMouseEnter={() => setCapabilitiesDropdownOpen(true)}
            onMouseLeave={() => setCapabilitiesDropdownOpen(false)}
          >
            <span className="nav-link nav-link-dropdown">Capabilities</span>
            <div className={`dropdown-menu ${capabilitiesDropdownOpen ? 'open' : ''}`}>
              <Link to="/pivotal-thinking" className="dropdown-item" onClick={closeMenu}>Pivotal Thinking</Link>
            </div>
          </div>
          <a href="mailto:test@gmail.com" className="nav-link" onClick={closeMenu}>Engage</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

