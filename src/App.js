import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CardGrid  from './components/js/CardGrid';
import GBF from './components/js/GBF';
import Genshin from './components/js/Genshin';

function App() {
  return (
    <div className="App">
      <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<CardGrid />} />
          <Route exact path="/gbf" element={<GBF />} />
          <Route exact path="/genshin" element={<Genshin />} />
        </Routes>
      </Router>
      </Container>
    </div>
  );
}

export default App;
