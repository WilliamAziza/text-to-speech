import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function CartPage({ cartItems, onRemoveFromCart }) {
  return (
    
      
      <Cart
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
      />
    
  );
}

export default CartPage;
