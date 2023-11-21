import React, { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ReactComponent as BulbIcon } from '../../assets/bulb.svg';

function Bubble({ size, initialX, initialY }) {
  const [isClicked, setIsClicked] = useState(false);
  const bubbleRef = useRef(null);

  const animateBubble = useCallback((element) => {
    gsap.to(element, {
      duration: 60 + Math.random() * 30,
      rotation: 360,
      repeat: -1,
      yoyo: true,
      ease: 'linear',
      x: () => Math.random() * (window.innerWidth - size),
      y: () => Math.random() * (window.innerHeight - size),
    });
  }, [size]);

  useEffect(() => {
    if (!bubbleRef.current) return;

    gsap.fromTo(bubbleRef.current, { opacity: 0 }, {
      x: initialX,
      y: initialY,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: '#175e7f',
      opacity: 1,
      duration: 2,
      ease: 'power1.inOut',
      onComplete: () => animateBubble(bubbleRef.current),
    });
  }, [initialX, initialY, size, animateBubble]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      animateBubble(bubbleRef.current);
    } else {
      gsap.killTweensOf(bubbleRef.current);
    }
  };

  const bulbIconSize = size * 3;

  return (
    <div
      ref={bubbleRef}
      className="bubble"
      onClick={handleClick}
      style={{
        borderRadius: '50%',
        position: 'absolute',
        cursor: 'pointer',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: isClicked ? 'transparent' : '#175e7f',
       
      }}
    >
        {isClicked && (
        <BulbIcon
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${bulbIconSize}px`,
            height: `${bulbIconSize}px`,
            color:'#175e7f'
          }}
        />
      )}
    </div>
  );
}

export default Bubble;