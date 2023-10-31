import React, { useState } from 'react';
import '../App.css'; // Create a corresponding CSS file for styling

const HoverImage = ({ imageSrc, altText, children, width, aspectRatio = 16 / 9 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
    setPosition(getRandomPosition());
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getImageSize = (width) => {
    const height = width / aspectRatio;
    return { width, height };
  };

  const imageSize = getImageSize(width || 200); // Default width is 200 if not provided

  const getRandomPosition = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const maxLeft = windowWidth - imageSize.width;
    const maxTop = windowHeight - imageSize.height;

    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);

    return { left: randomLeft, top: randomTop };
  };

  return (
    <div
      className="hover-element"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered &&
        <div
          className="popup-overlay"
          style={{
            left: `${position.left}px`,
            top: `${position.top}px`,
            width: `${imageSize.width}px`,
            height: `${imageSize.height}px`,
          }}
        >
          <img src={imageSrc} alt={altText} />
        </div>
      }
    </div>
  );
};

export default HoverImage;
