import './ContentCards.css';
import chevronIcon from '../assets/chevron-right-double.png';
import { useNavigate } from 'react-router-dom';

interface ContentCard {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const contentCards: ContentCard[] = [
  {
    id: 1,
    title: 'Pivotal Thinking',
    description: 'Generating strategic intelligence to understand transitions, shocks, inflection points across geopolitics, technology.economics, climate and society.',
    buttonText: 'All Pivotal Thinking',
    buttonLink: '/pivotal-thinking'
  },
  {
    id: 2,
    title: 'Strategic Counsel',
    description: 'Supporting governments, blocs and institutions as they navigate structural change',
    buttonText: 'See Our Mandates',
    buttonLink: '/capabilities'
  },
  {
    id: 3,
    title: 'Systemic Intervention and Strategic Investment',
    description: 'Executing interventions to stabilise environments, mobilise capital and technology, and convert gaps into engines of prosperity',
    buttonText: 'Explore Capabilities',
    buttonLink: '/capabilities'
  }
];

function ContentCards() {
  const navigate = useNavigate();

  const handleButtonClick = (link: string) => {
    navigate(link);
  };

  return (
    <section id="capabilities" className="content-cards-section">
      <div className="content-cards-container">
        {contentCards.map((card) => (
          <div key={card.id} className="content-card">
            <div className="card-image">
              {/* Placeholder for data visualization/chart */}
            </div>
            <div className="card-content-wrapper">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <button 
                className={`card-button ${card.id === 1 ? 'card-button-primary' : 'card-button-secondary'}`}
                onClick={() => handleButtonClick(card.buttonLink)}
              >
                {card.buttonText}
                <img src={chevronIcon} alt="" className="card-button-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContentCards;

