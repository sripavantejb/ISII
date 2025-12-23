import { useEffect } from 'react';
import './LatestThinking.css';
import { preloadImage } from '../utils/imagePreloader';

function LatestThinking() {
  useEffect(() => {
    // Preload LatestThinking banner image
    preloadImage('https://res.cloudinary.com/dqataciy5/image/upload/v1766337460/Gemini_Generated_Image_bp2fw9bp2fw9bp2f_txvzzp.png');
  }, []);

  return (
    <section className="latest-thinking">
      <div className="latest-thinking-overlay"></div>
      <div className="latest-thinking-container">
        <div className="latest-thinking-content">
          <div className="latest-thinking-badge">Our Latest Pivotal Thinking</div>
          <h2 className="latest-thinking-title">America the Merchant Power,<br />The National Security Strategy 2025</h2>
        </div>
      </div>
    </section>
  );
}

export default LatestThinking;

