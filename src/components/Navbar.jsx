import React from 'react';

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
        <span>Cart ({cartCount})</span>
      </div>
    </nav>
  );
}

export default Navbar;
