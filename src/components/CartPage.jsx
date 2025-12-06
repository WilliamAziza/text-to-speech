import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useAppContext } from '../context/AppContext';

function CartPage() {
  const { cartItems, handleRemoveFromCart } = useAppContext();

  return (
    <div className="App">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>Groceries and Giggles by Gloria - Shopping Cart</h1>
      </Link>
      <Cart
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
      />
      {cartItems.length > 0 && (
        <div className="checkout-section">
          <Link to="/checkout" className="btn checkout-btn">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
