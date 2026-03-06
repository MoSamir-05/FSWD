import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Fashion House</h1>
        <p>Know more about our brand and journey</p>
      </div>

      <div className="container">
        <section className="about-section">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Fashion House was founded in 2010 with a simple mission: to bring 
              high-quality, stylish clothing to everyone. What started as a small 
              boutique has grown into a leading fashion retailer.
            </p>
            <p>
              We believe that fashion should be accessible, sustainable, and 
              empowering. Every piece in our collection is carefully curated 
              to ensure the highest standards of quality and style.
            </p>
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To provide premium quality fashion at affordable prices, 
              making style accessible to everyone.
            </p>
          </div>
          <div className="mission-card">
            <h3>👀 Our Vision</h3>
            <p>
              To be the leading fashion brand that inspires confidence 
              and self-expression through clothing.
            </p>
          </div>
          <div className="mission-card">
            <h3>💚 Our Values</h3>
            <p>
              Quality, Authenticity, Sustainability, and Customer Satisfaction 
              are at the core of everything we do.
            </p>
          </div>
        </section>

        <section className="values-section">
          <h2>Why Choose Us?</h2>
          <div className="values-grid">
            <div className="value-item">
              <span className="value-icon">⭐</span>
              <h4>Premium Quality</h4>
              <p>We only select the finest materials and designs</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🌍</span>
              <h4>Sustainable</h4>
              <p>Committed to eco-friendly and ethical practices</p>
            </div>
            <div className="value-item">
              <span className="value-icon">💰</span>
              <h4>Best Price</h4>
              <p>Competitive pricing without compromising quality</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🤝</span>
              <h4>Customer First</h4>
              <p>Your satisfaction is our top priority</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <p>
            Fashion House is led by a team of passionate fashion experts, 
            designers, and customer service professionals dedicated to making 
            your shopping experience exceptional.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <p className="member-avatar">👨‍💼</p>
              <h4>John Designer</h4>
              <p>Creative Director</p>
            </div>
            <div className="team-member">
              <p className="member-avatar">👩‍💼</p>
              <h4>Sarah Fashion</h4>
              <p>Head of Collections</p>
            </div>
            <div className="team-member">
              <p className="member-avatar">👨‍💼</p>
              <h4>Mike Johnson</h4>
              <p>Operations Manager</p>
            </div>
            <div className="team-member">
              <p className="member-avatar">👩‍💼</p>
              <h4>Emma Thompson</h4>
              <p>Customer Service Lead</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;