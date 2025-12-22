import './ContentCards.css';

function ContentCards() {
  return (
    <section id="capabilities" className="content-cards-section">
      <div className="content-cards-container">
        <div className="content-card">
          <h3 className="card-title">Pivotal Thinking</h3>
          <p className="card-description">
            Generating strategic intelligence to understand transitions, shocks, inflection points across geopolitics, technology, economics, climate and society.
          </p>
          <button className="card-button">All Pivotal Thinking</button>
        </div>
        
        <div className="content-card">
          <h3 className="card-title">Strategic Counsel</h3>
          <p className="card-description">
            Supporting governments, blocs and institutions as they navigate structural change
          </p>
          <button className="card-button">See Our Mandates</button>
        </div>
        
        <div className="content-card">
          <h3 className="card-title">Systemic Intervention and Strategic Investment</h3>
          <p className="card-description">
            Executing interventions to stabilise environments, mobilise capital and technology, and convert gaps into engines of prosperity
          </p>
          <button className="card-button">Explore Capabilities</button>
        </div>
      </div>
    </section>
  );
}

export default ContentCards;

