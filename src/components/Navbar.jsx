import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ searchTerm, onSearchChange, cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Eva</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
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
