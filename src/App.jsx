import React, { useState } from 'react';
import Bubbles from './components/Bubbles';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div>Hello</div>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <Bubbles darkMode={darkMode} />
    </div>
  );
}

export default App;
