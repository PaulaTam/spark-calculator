import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CardGrid  from './components/js/CardGrid';
import { TopNavBar } from './components/js/TopNavBar';
import About from './components/js/About';

//all calculator imports here
import GBF from './components/js/GBF';
import Genshin from './components/js/Genshin';
import ProSekai from './components/js/ProSekai';

function App() {
  return (
    <div className="App">
      <TopNavBar />
        <Container>
        <Router>
          <Routes>
            <Route exact path="/" element={<CardGrid />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/gbf" element={<GBF />} />
            <Route exact path="/genshin" element={<Genshin />} />
            <Route exact path="/prosekai" element={<ProSekai />} />
          </Routes>
        </Router>
        </Container>
    </div>
  );
}

export default App;
