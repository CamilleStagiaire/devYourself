import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Layout/Header';
import Bubbles from './components/Bubbles';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import './sass/style.scss';

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

  useEffect(() => {
   
    gsap.registerPlugin(ScrollTrigger);
  
    const sections = ['.home', '.project', '.about', '.contact'];
  
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false,
        scrub: 1,
       
      });
    });

    // gsap.to('.bubble-container', {
    //   scrollTrigger: {
    //     trigger: ".page-container",
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: true
    //   },
    //   rotation: () => {
    //     const scrollDirection = ScrollTrigger.direction;
    //     return scrollDirection === 1 ? 360 : -360; // Tourner vers la droite ou la gauche
    //   }
    // });
  }, []);
  

  return (
    <div className="App">
      <Header />
      <div className="toggle-dark-mode-button">
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </div>
      <Bubbles darkMode={darkMode} />
      <div className="page-container">
      <div className="home">
          
          <Home />
        </div>
        <div className="section-divider"></div>
        <div className="project">
       
          <Project />
        </div>
        <div className="about">
         
          <About />
        </div>
        <div className="contact">
         
          <Contact />
        </div>
      </div>
      
    </div>
  );
}

export default App;
