import React, { useState } from 'react';
import products from '../data/products';
import ProductItem from './ProductItem';

function ProductList({ onAddToCart }) {
  const [category, setCategory] = useState('groceries');

  const filteredProducts = products.filter(p => p.category === category);

  return (
    <div className="product-list-container">
      <div className="category-buttons">
        <button
          className={category === 'groceries' ? 'active' : ''}
          onClick={() => setCategory('groceries')}
        >
          Groceries
        </button>
        <button
          className={category === 'cosmetics' ? 'active' : ''}
          onClick={() => setCategory('cosmetics')}
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
