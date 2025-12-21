import Header from './components/Header';
import Hero from './components/Hero';
import LatestThinking from './components/LatestThinking';
import ContentCards from './components/ContentCards';
import PivotalThinking from './components/PivotalThinking';
import MissionStatement from './components/MissionStatement';
import Footer from './components/Footer';
import FloatingHomeButton from './components/FloatingHomeButton';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <LatestThinking />
      <ContentCards />
      <PivotalThinking />
      <MissionStatement />
      <Footer />
      <FloatingHomeButton />
    </>
  );
}

export default App;
