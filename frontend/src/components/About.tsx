import { useEffect } from 'react';
import './About.css';
import { preloadImage } from '../utils/imagePreloader';

function About() {
  useEffect(() => {
    // Preload About banner image
    preloadImage('https://res.cloudinary.com/dqataciy5/image/upload/v1766340034/Gemini_Generated_Image_uiosyuuiosyuuios_iky1pj.png');
  }, []);

  return (
    <section className="about-page">
      <div className="about-banner-section">
        <div className="about-banner-image">
          <h1 className="about-banner-heading">About Us</h1>
        </div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to the Institute for Strategic Intelligence and Intervention (ISII). 
            We are dedicated to understanding and shaping system-level transitions, major events, 
            and strategic turning points affecting nations, regions, and global structures.
          </p>
          <p>
            Our team works to generate strategic intelligence for high-stakes decision-making 
            and to design and execute interventions that stabilize environments, reposition sovereigns, 
            mobilize capital and technology, and enable societies to transition securely and 
            prosperously into the Information Era.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

