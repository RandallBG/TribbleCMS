

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
// pages import
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import {LinkContainer} from 'react-router-bootstrap';




function App() {
  return (
    <div>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
