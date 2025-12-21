import './PivotalThinking.css';

interface ContentCard {
  id: number;
  image: string;
  date: string;
  title: string;
  pdfUrl: string;
}

const contentCards: ContentCard[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    date: 'December 2025',
    title: 'America the Merchant Power, The National Security Strategy 2025',
    pdfUrl: '/sample-pdf-1.pdf'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    date: 'November 2025',
    title: 'The Tech-Leveraged Empire: Strategic Limits of U.S. Power',
    pdfUrl: '/sample-pdf-2.pdf'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    date: 'October 2025',
    title: "America's New Golden Age or a Gilded One?",
    pdfUrl: '/sample-pdf-3.pdf'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    date: 'September 2025',
    title: 'The World Investment Plan Leveraging Capital Markets for a Peaceful Transition to the Information Era',
    pdfUrl: '/sample-pdf-4.pdf'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80',
    date: 'August 2025',
    title: 'Turbulent Times: A Framework for Navigating Global Crisis Through Conscious Transformation',
    pdfUrl: '/sample-pdf-5.pdf'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    date: 'July 2025',
    title: 'Project 2025, Trump, and the Remaking of the World',
    pdfUrl: '/sample-pdf-6.pdf'
  }
];

function PivotalThinking() {
  const handleCardClick = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <section className="pivotal-thinking-page">
      <div className="banner-section">
        <div className="banner-image"></div>
      </div>

      <div className="pivotal-thinking-content">
        <div className="content-cards-grid">
          {contentCards.map((card) => (
            <div
              key={card.id}
              className="content-card-item"
              onClick={() => handleCardClick(card.pdfUrl)}
            >
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-info">
                <div className="card-date">{card.date}</div>
                <h3 className="card-title">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <aside className="content-library">
          <h2 className="library-title">Content Library</h2>
          <ol className="library-list">
            {contentCards.map((card) => (
              <li key={card.id}>
                <a 
                  href={card.pdfUrl} 
                  className="library-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCardClick(card.pdfUrl);
                  }}
                >
                  {card.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}

export default PivotalThinking;

