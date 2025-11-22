naimport React, { useState } from 'react';
import './App.css';
import './styles.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currentSection, setCurrentSection] = useState('home');

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app-container">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <h1>Groceries and Cosmetics Shop</h1>
      {currentSection === 'home' && <ProductList onAddToCart={handleAddToCart} />}
      {currentSection === 'cart' && <Cart cartItems={cartItems} />}
    </div>
  );
}

export default App;
