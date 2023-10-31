import React, { useState, useEffect } from 'react';
import '../App.css';

const DVDLogo = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });
  const speed = 0.5;

  useEffect(() => {
    const boundingBox = document.querySelector('.dvd-logo-container').getBoundingClientRect();
    const logoBox = document.querySelector('.dvd-logo').getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const animate = () => {
      const newX = position.x + speed * direction.x;
      const newY = position.y + speed * direction.y;
      const scrollY = window.scrollY;
      
      if (newX < 0 || newX > viewportWidth - logoBox.width) {
        setDirection((prevDirection) => ({ x: -prevDirection.x, y: prevDirection.y }));
      }

      if (newY < scrollY || newY > scrollY + viewportHeight - logoBox.height) {
        setDirection((prevDirection) => ({ x: prevDirection.x, y: -prevDirection.y }));
      }

      setPosition({ x: newX, y: newY });
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [position, direction]);

  return (
    <div className="dvd-logo-container">
      <div className="dvd-logo" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
    </div>
  );
};

export default DVDLogo;
