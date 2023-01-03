import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CardGrid  from './components/js/CardGrid';
import  GBF  from './components/js/GBF';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<CardGrid/>} />
          <Route exact path="/gbf" element={<GBF/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
