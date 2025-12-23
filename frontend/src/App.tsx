import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingHomeButton from './components/FloatingHomeButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import PivotalThinkingPage from './pages/PivotalThinking';
import OurMission from './pages/OurMission';
import { preloadImages } from './utils/imagePreloader';
import './App.css';

function App() {
  useEffect(() => {
    // Preload all critical banner images on app load
    const criticalImages = [
      'https://res.cloudinary.com/dqataciy5/image/upload/v1766466793/Main_tfkyaj.png', // Hero Desktop
      'https://res.cloudinary.com/dqataciy5/image/upload/v1766467988/Main_2_ikdmi8.png', // Hero Tablet
      'https://res.cloudinary.com/dqataciy5/image/upload/v1766467273/Main_1_s55wtz.png', // Hero Mobile
      'https://res.cloudinary.com/dqataciy5/image/upload/v1766337460/Gemini_Generated_Image_bp2fw9bp2fw9bp2f_txvzzp.png', // LatestThinking & PivotalThinking
      'https://res.cloudinary.com/dqataciy5/image/upload/v1766340034/Gemini_Generated_Image_uiosyuuiosyuuios_iky1pj.png' // Mission & About
    ];
    preloadImages(criticalImages);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
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
