import Hero from '../components/Hero';
import LatestThinking from '../components/LatestThinking';
import ContentCards from '../components/ContentCards';
import './Home.css';

function Home() {
  return (
    <>
      <Hero />
      <div className="home-content-wrapper">
        <LatestThinking />
        <ContentCards />
      </div>
    </>
  );
}

export default Home;

