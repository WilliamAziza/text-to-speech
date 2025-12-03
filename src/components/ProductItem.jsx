import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
}

export default ProductItem;
