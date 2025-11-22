import React from 'react';

function ProductItem({ product, onAddToCart }) {
  const { name, price, image, description } = product;

  return (
    <div className="product-item">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
