import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Discover Your Style</h1>
        <p>Premium Fashion for Every Occasion</p>
        <button className="hero-button">Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;