import { useState, useEffect } from 'react';
import './FloatingHomeButton.css';

function FloatingHomeButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        
        // Show button only when user has completely scrolled past the Hero section
        // Hide when at the top of the page (home/Hero section)
        setIsVisible(window.scrollY > heroBottom);
      } else {
        // Fallback: show after scrolling down a bit, but hide at top
        setIsVisible(window.scrollY > 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button 
      className="floating-home-button" 
      onClick={scrollToHome}
      aria-label="Scroll to home"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 15L10 5M10 5L5 10M10 5L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

export default FloatingHomeButton;

