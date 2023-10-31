import React, { Component } from 'react';
import '../App.css'; // Create a corresponding CSS file for styling

class HorizontalMarquee extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="horizontal-marquee">
        <div className="marquee-content">
          {children}
        </div>
      </div>
    );
  }
}

export default HorizontalMarquee;
