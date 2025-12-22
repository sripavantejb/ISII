import './MissionStatement.css';

function MissionStatement() {
  return (
    <section id="about" className="mission-statement-page">
      <div className="mission-heading-wrapper">
        <h1 className="mission-main-heading">About Us &gt; Our Mission</h1>
      </div>

      <div className="mission-banner-section">
        <div className="mission-banner-image"></div>
      </div>

      <div className="mission-content">
        <h2 className="mission-heading">Mission Statement</h2>
        <p className="mission-text">
          The Institute for Strategic Intelligence and Intervention (ISII) exists to understand and shape the system-level transitions, major events, and strategic turning points affecting nations, regions, and global structures. Its mission is to generate the strategic intelligence required for high-stakes decision-making, and to design and execute interventions that stabilise environments, reposition sovereigns, mobilise capital and technology, and enable societies to transition securely and prosperously into the Information Era.
        </p>
      </div>
    </section>
  );
}

export default MissionStatement;

