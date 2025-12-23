import { useEffect } from 'react';
import './MissionStatement.css';
import { preloadImage } from '../utils/imagePreloader';

function MissionStatement() {
  useEffect(() => {
    // Preload Mission banner image
    preloadImage('https://res.cloudinary.com/dqataciy5/image/upload/v1766340034/Gemini_Generated_Image_uiosyuuiosyuuios_iky1pj.png');
  }, []);

  return (
    <section id="about" className="mission-statement-page">
      <div className="mission-banner-section">
        <div className="mission-banner-image">
          <h1 className="mission-banner-heading">Our Mission</h1>
        </div>
      </div>

      <div className="mission-content">
        <p className="mission-text">
          The Institute for Strategic Intelligence and Intervention (ISII) exists to understand and shape the system-level transitions, major events, and strategic turning points affecting nations, regions, and global structures. Its mission is to generate the strategic intelligence required for high-stakes decision-making, and to design and execute interventions that stabilise environments, reposition sovereigns, mobilise capital and technology, and enable societies to transition securely and prosperously into the Information Era.
        </p>
      </div>
    </section>
  );
}

export default MissionStatement;

