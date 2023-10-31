import React from 'react';
import '../App.css'; // Create a corresponding CSS file for styling
import TRAVSPRESENTS5 from '../Assets/TRAVSPRESENTS5.png'

function HorizontalScrollContainer({ imageUrls }) {
  return (
    <div className="horizontal-scroll-container">
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className="scroll-item"
        />
      ))}
    </div>
  );
}

export default HorizontalScrollContainer;
