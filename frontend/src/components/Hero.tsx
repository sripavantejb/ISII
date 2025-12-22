import './Hero.css';

function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">ISII</h1>
            <h2 className="hero-subtitle">The Institute for Strategic Intelligence and Intervention</h2>
            <p className="hero-description">
              The Institute for Strategic Intelligence and Intervention (ISII) exists to understand and shape the system-level transitions, major events, and strategic turning points affecting nations, regions, and global structures. Its mission is to generate the strategic intelligence required for high-stakes decision-making, and to design and execute interventions that stabilise environments, reposition sovereigns, mobilise capital and technology, and enable societies to transition securely and prosperously into the Information Era.

            </p>
            <button className="hero-cta" onClick={scrollToAbout}>About Us</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;

