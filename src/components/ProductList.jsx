import React, { useState } from 'react';
import products from '../data/products';
import ProductItem from './ProductItem';
import { useAppContext } from '../context/AppContext';

function ProductList() {
  const { searchTerm, selectedCategory, setSelectedCategory, handleAddToCart } = useAppContext();
  const [sortOption, setSortOption] = useState('name-asc');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="product-list-container">
      <div className="filters">
        <div className="category-buttons">
          <button
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          <button
            className={selectedCategory === 'groceries' ? 'active' : ''}
            onClick={() => setSelectedCategory('groceries')}
          >
            Groceries
          </button>
          <button
            className={selectedCategory === 'cosmetics' ? 'active' : ''}
            onClick={() => setSelectedCategory('cosmetics')}
          >
            Cosmetics
          </button>
        </div>
        <div className="sort-dropdown">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
            <option value="price-low">Price Low to High</option>
            <option value="price-high">Price High to Low</option>
          </select>
        </div>
      </div>
      <div className="product-list">
        {sortedProducts.slice(0, 6).map(product => (
          <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
