import React from 'react';
import { categories } from '../data/services';
import '../styles/Categories.css';

const Categories = () => {
  return (
    <div className="categories-page">
      <div className="page-header">
        <h1>Product Categories</h1>
        <p>Browse our collections by category</p>
      </div>

      <div className="container">
        <div className="categories-grid-large">
          {categories.map(category => (
            <div key={category.id} className="category-card-large">
              <div className="category-card-emoji">{category.image}</div>
              <div className="category-card-content">
                <h2>{category.name}</h2>
                <p>{category.itemCount} Products Available</p>
                <button className="category-card-btn">
                  Browse {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Category Details */}
        <section className="category-details">
          <div className="detail-card">
            <h3>👨‍💼 Men's Collection</h3>
            <p>
              Discover our premium men's collection featuring stylish t-shirts, 
              jeans, formal wear, and accessories. Perfect for any occasion.
            </p>
          </div>
          <div className="detail-card">
            <h3>👩‍💼 Women's Collection</h3>
            <p>
              Explore our elegant women's collection with dresses, blouses, 
              leggings, and accessories for every style.
            </p>
          </div>
          <div className="detail-card">
            <h3>👧 Kids' Collection</h3>
            <p>
              Find comfortable and fun clothing for kids with our colorful 
              and durable kids' collection.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;