import React, { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ReactComponent as BulbIcon } from '../../assets/bulb.svg';
import { ReactComponent as SwirlIcon } from '../../assets/swirl.svg';

function Bubble({ size, darkMode }) {
  const [isClicked, setIsClicked] = useState(false);
  const containerRef = useRef(null); // Conteneur pour la bulle et le SVG
  const bubbleRef = useRef(null); // Référence pour la bulle
  const iconRef = useRef(null); // Référence pour l'icône SVG
  

  const animateBubble = useCallback(() => {
    if (!containerRef.current || isClicked) return;

    gsap.to(containerRef.current, {
      duration: 60 + Math.random() * 20,
      repeat: -1,
      yoyo: true,
      ease: 'linear',
      x: () => Math.random() * (window.innerWidth - size),
      y: () => Math.random() * (window.innerHeight - size),
    });
  }, [isClicked, size]);

  useEffect(() => {
    animateBubble();
  }, [animateBubble]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    gsap.killTweensOf(containerRef.current);

    // Animation pour la bulle
    gsap.to(bubbleRef.current, { opacity: isClicked ? 1 : 0, scale: isClicked ? 1 : 0, duration: 0.5 });

    // Animation pour le SVG
    if (iconRef.current) {
      gsap.to(iconRef.current, { opacity: isClicked ? 0 : 1, scale: isClicked ? 0 : 1, duration: 0.5 });
    }
  };

const iconSize = `${size * 3}px`;
const svgStyle = {
  width: `${size * 3}px`,
  height: `${size * 3}px`
};


  return (
    <div ref={containerRef} style={{ position: 'absolute', width: `${size}px`, height: `${size}px`, cursor: 'pointer' }} onClick={handleClick}>
      <div
        ref={bubbleRef}
        style={{
          borderRadius: '50%',
          width: '100%',
          height: '100%',
          backgroundColor: '#175e7f',
          opacity: 1,
          transform: 'scale(1)',
        }}
      />
      <div ref={iconRef} style={{ position: 'absolute', top: 0, left: 0, width: `${iconSize}px`, height: `${iconSize}px`, opacity: 0, transform: 'scale(0)' }}>
      {isClicked && (
        <div style={{ /* ... */ }}>
          {darkMode ? <SwirlIcon style={svgStyle} /> : <BulbIcon style={svgStyle} />}
        </div>
      )}
      </div>
    </div>
  );
}

export default Bubble;


