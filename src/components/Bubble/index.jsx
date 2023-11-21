import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ReactComponent as BulbIcon } from '../../assets/bulb.svg';
import { ReactComponent as SwirlIcon } from '../../assets/swirl.svg';

function Bubble({ size, darkMode }) {
  const [isClicked, setIsClicked] = useState(false);
  const [secondClick, setSecondClick] = useState(false);
  const containerRef = useRef(null);
  const bubbleRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const startContinuousAnimation = () => {
      gsap.to(containerRef.current, {
        duration: 40 + Math.random() * 120,
        repeat: -1,
        yoyo: true,
        ease: 'linear',
        x: () => Math.random() * (window.innerWidth - size),
        y: () => Math.random() * (window.innerHeight - size),
      });
    };

    gsap.to(containerRef.current, {
      duration: 2,
      ease: 'power1.out',
      x: () => Math.random() * (window.innerWidth - size),
      y: () => Math.random() * (window.innerHeight - size),
      onComplete: startContinuousAnimation,
    });
  }, [size]);

  const handleClick = () => {
    setIsClicked(true);
    if (!secondClick) {
      // Premier clic: montre le SVG, cache la bulle
      gsap.to(bubbleRef.current, { opacity: 0, scale: 0, duration: 0.5 });
      gsap.to(iconRef.current, { opacity: 1, scale: 1, duration: 0.5 });
     
    } else {
      // Second clic: montre la bulle, cache le SVG
      gsap.to(bubbleRef.current, { opacity: 1, scale: 1, duration: 0.5 });
      gsap.to(iconRef.current, { opacity: 0, scale: 0, duration: 0.5 });
      setSecondClick(false);
    }
  };

  const handleClickSvg = (event) => {
    event.stopPropagation();
    setSecondClick(true);
    handleClick();
  };

  return (
    <div className="bubble" ref={containerRef} style={{ width: `${size}px`, height: `${size}px` }} onClick={handleClick}>
      <div className="bubble__inner" ref={bubbleRef} />
      <div className="bubble__icon" ref={iconRef} onClick={handleClickSvg}>
        {isClicked && (darkMode ? <SwirlIcon style={{ width: `${size * 3}px`, height: `${size * 3}px` }} /> : <BulbIcon style={{ width: `${size * 3}px`, height: `${size * 3}px` }} />)}
      </div>
    </div>
  );
}

export default Bubble;