import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ServiceCard';
import { categories } from '../data/services';
import products from '../data/services';
import '../styles/Home.css';

const Home = () => {
  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home">
      <Hero />

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <h2>Featured Products</h2>
          <p className="section-subtitle">Discover our exclusive collection</p>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2>Shop by Category</h2>
          <p className="section-subtitle">Find what you're looking for</p>
          <div className="categories-grid">
            {categories.map(category => (
              <div key={category.id} className="category-item">
                <div className="category-image">{category.image}</div>
                <h3>{category.name}</h3>
                <p>{category.itemCount} Items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="promo-section">
        <div className="container">
          <div className="promo-banner">
            <div className="promo-content">
              <h2>Summer Collection 2024</h2>
              <p>Get up to 50% off on selected items</p>
              <button className="promo-button">Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature">
              <span className="feature-icon">🚚</span>
              <h3>Free Shipping</h3>
              <p>On orders over $50</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🔄</span>
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🛡️</span>
              <h3>Secure Payment</h3>
              <p>100% secure transactions</p>
            </div>
            <div className="feature">
              <span className="feature-icon">💬</span>
              <h3>24/7 Support</h3>
              <p>Always here to help</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;