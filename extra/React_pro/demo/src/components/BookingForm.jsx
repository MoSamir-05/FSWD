import React from 'react';
import '../styles/CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <div className="category-image">
        <img src={category.image} alt={category.name} />
        <div className="category-overlay"></div>
      </div>
      <div className="category-info">
        <h3>{category.name}</h3>
        <p>{category.itemCount} Items</p>
      </div>
    </div>
  );
};

export default CategoryCard;
