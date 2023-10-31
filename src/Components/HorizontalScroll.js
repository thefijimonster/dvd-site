import React, { Component } from 'react';
import '../App.css'; // Create a corresponding CSS file for styling

class HorizontalScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolling: false,
    };
    this.scrollContainer = null;
  }

  componentDidMount() {
    // Automatically start scrolling when the component mounts
    this.startAutoScroll();
    this.scrollContainer.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Clean up event listeners when the component unmounts
    this.scrollContainer.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // Stop the auto-scroll when the user manually scrolls
    this.stopAutoScroll();
  };

  startAutoScroll = () => {
    this.setState({ isScrolling: true });
  };

  stopAutoScroll = () => {
    this.setState({ isScrolling: false });
  };

  render() {
    return (
      <div className="horizontal-scroll" ref={(ref) => (this.scrollContainer = ref)}>
        <div className={`scroll-content ${this.state.isScrolling ? 'auto-scrolling' : ''}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default HorizontalScroll;
