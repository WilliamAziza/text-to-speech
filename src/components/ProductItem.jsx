import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ProductItem({ product, onAddToCart }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onAddToCart(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
      </Link>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
