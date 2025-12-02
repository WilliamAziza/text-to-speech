import React, { useState } from 'react';
import products from '../data/products';
import ProductItem from './ProductItem';

function ProductList({ onAddToCart, searchTerm, selectedCategory, onCategoryChange }) {
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="product-list-container">
      <div className="category-buttons">
        <button
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => onCategoryChange('all')}
        >
          All
        </button>
        <button
          className={selectedCategory === 'groceries' ? 'active' : ''}
          onClick={() => onCategoryChange('groceries')}
        >
          Groceries
        </button>
        <button
          className={selectedCategory === 'cosmetics' ? 'active' : ''}
          onClick={() => onCategoryChange('cosmetics')}
        >
          Cosmetics
        </button>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
