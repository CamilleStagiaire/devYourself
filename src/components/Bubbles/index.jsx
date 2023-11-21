import Bubble from '../Bubble';

function Bubbles() {
  return (
    <div className="bubble-container">
      {Array.from({ length: 20 }, (_, i) => {
        const size = 7 + Math.random() * 8;
        const initialX = Math.random() * (window.innerWidth - size);
        const initialY = Math.random() * (window.innerHeight - size);
        return (
          <Bubble
            key={i}
            size={size}
            initialX={initialX}
            initialY={initialY}
          />
        );
      })}
    </div>
  );
}

export default Bubbles;
