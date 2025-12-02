import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function CartPage({ cartItems, onRemoveFromCart }) {
  return (
    <div className="App">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>Eva - Shopping Cart</h1>
      </Link>
      <Cart
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
      />
    </div>
  );
}

export default CartPage;
