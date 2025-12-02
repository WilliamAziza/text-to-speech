import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ searchTerm, onSearchChange, cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo">
            <span>Groceries and Giggles by Gloria</span>
          </div>
        </Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button type="button" className="search-button">Search</button>
      </div>
      <div className="cart-icon">
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span>🛒 ({cartCount})</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
