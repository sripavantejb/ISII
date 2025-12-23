import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Hero.css';
import chevronIcon from '../assets/chevron-right-double.png';
import { preloadImages } from '../utils/imagePreloader';

function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    // Preload all hero images for different screen sizes
    const heroImages = [
      'https://res.cloudinary.com/dqataciy5/image/upload/v1766466793/Main_tfkyaj.png', // Desktop
      'https://res.cloudinary.com/dqataciy5/image/upload/v1766467988/Main_2_ikdmi8.png', // Tablet
      'https://res.cloudinary.com/dqataciy5/image/upload/v1766467273/Main_1_s55wtz.png' // Mobile
    ];
    preloadImages(heroImages);
  }, []);

  const handleAboutClick = () => {
    navigate('/about/mission');
  };

  return (
    <main id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-subtitle">The Institute for Strategic Intelligence<br />and Intervention</h2>
            <p className="hero-description">
              The Institute for Strategic Intelligence and Intervention (ISII) exists to understand and shape the system-level transitions, major events, and strategic turning points affecting nations, regions, and global structures. Its mission is to generate the strategic intelligence required for high-stakes decision-making, and to design and execute interventions that stabilise environments, reposition sovereigns, mobilise capital and technology, and enable societies to transition securely and prosperously into the Information Era.

            </p>
            <button className="hero-cta" onClick={handleAboutClick}>
              About Us
              <img src={chevronIcon} alt="" className="hero-cta-icon" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;

