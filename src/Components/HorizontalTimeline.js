import React, { useState } from 'react';
import '../App.css'; // Create a corresponding CSS file for styling

const items = [
  { year: 2020, event: 'Event 1' },
  { year: 2021, event: 'Event 2' },
  { year: 2022, event: 'Event 3' },
  { year: 2023, event: 'Event 4' },
  // Add more events as needed
];

const HorizontalTimeline = () => {
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = (e) => {
    setScrollX(e.target.scrollLeft);
  };

  return (
    <div className="timeline-container">
      <div className="timeline" onScroll={handleScroll}>
        {items.map((item) => (
          <div key={item.year} className="event">
            <div className="year">{item.year}</div>
            <div className="event-description">{item.event}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;
