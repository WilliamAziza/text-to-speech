import React from 'react';

function Navbar({ currentSection, setCurrentSection }) {
  return (
    <nav className="navbar">
      <ul>
        <li
          className={currentSection === 'home' ? 'active' : ''}
          onClick={() => setCurrentSection('home')}
        >
          Home
        </li>
        <li
          className={currentSection === 'cart' ? 'active' : ''}
          onClick={() => setCurrentSection('cart')}
        >
          Cart
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
