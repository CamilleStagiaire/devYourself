import React, { useState, useEffect } from 'react';
import Bubbles from './components/Bubbles';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]); // Appliquez l'effet chaque fois que darkMode change

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <Bubbles darkMode={darkMode} />
    </div>
  );
}

export default App;
