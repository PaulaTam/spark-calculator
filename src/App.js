import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CardGrid  from './components/js/CardGrid';
import { TopNavBar } from './components/js/TopNavBar';
import About from './components/js/About';

import WIPAlert from './components/js/TempAlert';

//all calculator imports here
import GBF from './components/js/GBF';
import Genshin from './components/js/Genshin';
import ProSekai from './components/js/ProSekai';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter basename="/spark-calculator">
      <TopNavBar />
        <Container>
          <Routes>
            <Route path="/" element={<CardGrid />} />
            <Route path="/about" element={<About />} />
            <Route path="/gbf" element={<GBF />} />
            <Route path="/genshin" element={<Genshin />} />
            <Route path="/prosekai" element={<ProSekai />} />
          </Routes>
        </Container>
      <WIPAlert />
      </BrowserRouter>
    </div>
  );
}

export default App;
