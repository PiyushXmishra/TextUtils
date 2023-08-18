import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textforms from './Components/Textforms';
import { useState } from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'

    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
    }
  }
  const [mode, setMode] = useState('light')
  return (
    <>
      <Router>

        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="container my-3" >
          <Routes>
            < Route path="/about" element={<About />} />
           < Route path="/" element={<Textforms heading="Enter the text to analyze" mode={mode} />} />
           
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
