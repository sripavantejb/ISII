import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingHomeButton from './components/FloatingHomeButton';
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/capabilities" element={<Capabilities />} />
      </Routes>
      <Footer />
      <FloatingHomeButton />
    </BrowserRouter>
  );
}

export default App;
