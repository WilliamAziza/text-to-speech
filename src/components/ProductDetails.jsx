import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useAppContext } from '../context/AppContext';

function ProductDetails() {
  const { id } = useParams();
  const { handleAddToCart } = useAppContext();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <span className="rating">
        {'★'.repeat(fullStars)}
        {halfStar && '☆'}
        {'☆'.repeat(emptyStars)}
        ({rating})
      </span>
    );
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        {product.rating && renderStars(product.rating)}
        <p>Category: {product.category}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        {product.description && <p>{product.description}</p>}
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
