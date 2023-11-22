import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header2 from './components/Layout/Header2';
import Bubbles from './components/Bubbles';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import './sass/style2.scss';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Header2 />
      <Bubbles darkMode={darkMode} />
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;