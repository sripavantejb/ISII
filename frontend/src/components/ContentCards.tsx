import './ContentCards.css';
import chevronIcon from '../assets/chevron-right-double.png';
import solidIcon from '../assets/Solid.png';
import { useNavigate } from 'react-router-dom';

interface ContentCard {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const contentCards: ContentCard[] = [
  {
    id: 1,
    title: 'Pivotal Thinking',
    description: 'Generating strategic intelligence to understand transitions, shocks, inflection points across geopolitics, technology.economics, climate and society.',
    buttonText: 'All Pivotal Thinking',
    buttonLink: '/pivotal-thinking',
    image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1766414004/America_the_Merchant_Power_The_National_Security_Strategy_2025_cwdilq.png'
  },
  {
    id: 2,
    title: 'Strategic Counsel',
    description: 'Supporting governments, blocs and institutions as they navigate structural change mobilise capital and technology, and convert gaps into engines of prosperity',
    buttonText: 'See Our Mandates',
    buttonLink: '/capabilities',
    image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1766414004/America_the_Merchant_Power_The_National_Security_Strategy_2025_cwdilq.png'
  },
  {
    id: 3,
    title: 'Systemic Intervention and Strategic Investment',
    description: 'Executing interventions to stabilise environments, mobilise capital and technology, and convert gaps into engines of prosperity mobilise capital and technology',
    buttonText: 'Explore Capabilities',
    buttonLink: '/capabilities',
    image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1766414004/America_the_Merchant_Power_The_National_Security_Strategy_2025_cwdilq.png'
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
              <img src={card.image} alt={card.title} />
            </div>
            <div className={`card-content-wrapper ${card.id === 2 ? 'card-content-compact' : ''}`}>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <button 
                className={`card-button ${card.id === 1 ? 'card-button-primary' : 'card-button-secondary'}`}
                onClick={() => handleButtonClick(card.buttonLink)}
              >
                {card.buttonText}
                <img src={card.id === 1 ? solidIcon : chevronIcon} alt="" className="card-button-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContentCards;

