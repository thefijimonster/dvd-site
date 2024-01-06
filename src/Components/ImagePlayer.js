import React, { useState, useEffect } from 'react';

const ImagePlayer = ({ images, intervalDuration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    // Clear the interval when the component is unmounted or when images change
    return () => clearInterval(intervalId);
  }, [images, intervalDuration]);

  return (
    <div style={{ width: '500px', height: '400px'}}>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

export default ImagePlayer;
