import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingHomeButton from './components/FloatingHomeButton';
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import PivotalThinkingPage from './pages/PivotalThinking';
import OurMission from './pages/OurMission';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/mission" element={<OurMission />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/pivotal-thinking" element={<PivotalThinkingPage />} />
      </Routes>
      <Footer />
      <FloatingHomeButton />
    </BrowserRouter>
  );
}

export default App;
