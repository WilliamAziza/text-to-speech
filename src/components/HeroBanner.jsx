import React from 'react';

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Welcome to Groceries and Giggles by Gloria</h1>
        <p>Discover amazing products at unbeatable prices</p>
        <button className="cta-button">Shop Now</button>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop&crop=center" alt="Shopping" />
      </div>
    </div>
  );
}

export default HeroBanner;
