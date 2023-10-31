import React, { Component } from 'react';
import '../App.css';

class HorizontalCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollLeft: 0,
      itemWidth: 0,
    };
    this.carouselRef = React.createRef();
  }

  componentDidMount() {
    const item = this.carouselRef.current.querySelector('.carousel-item');
    if (item) {
      this.setState({ itemWidth: item.offsetWidth });
      this.startAutoScroll();
    }
  }

  componentWillUnmount() {
    this.stopAutoScroll();
  }

  startAutoScroll = () => {
    this.interval = setInterval(() => {
      this.scrollRight();
    }, 3000); // Adjust the interval duration as needed
  };

  stopAutoScroll = () => {
    clearInterval(this.interval);
  };

  scrollRight = () => {
    const { scrollLeft, itemWidth } = this.state;
    this.setState({ scrollLeft: scrollLeft + itemWidth });
  };

  render() {
    const { children } = this.props;
    const { scrollLeft } = this.state;

    const carouselStyle = {
      transform: `translateX(-${scrollLeft}px)`,
      transition: 'transform 0.5s ease-in-out', // Smooth scrolling transition
    };

    return (
      <div className="horizontal-carousel">
        <div className="carousel-container" ref={this.carouselRef}>
          <div className="carousel-wrapper" style={carouselStyle}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalCarousel;
