import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Checkout({ cartItems, onClearCart }) {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsConfirmed(true);
      onClearCart(); // Clear cart after successful payment
    }, 2000);
  };

  if (isConfirmed) {
    return (
      <div className="checkout">
        <h2>Order Confirmed!</h2>
        <p>Thank you for your purchase. Your order has been successfully processed.</p>
        <Link to="/" className="btn">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems.map((item, index) => (
          <div key={index} className="summary-item">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="summary-total">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="payment-form">
        <h3>Payment Information</h3>
        <div className="form-group">
          <label htmlFor="name">Name on Card</label>
          <input
            type="text"
            id="name"
            name="name"
            value={paymentInfo.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={paymentInfo.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={paymentInfo.cvv}
              onChange={handleInputChange}
              placeholder="123"
              required
            />
          </div>
        </div>
        <button type="submit" disabled={isProcessing} className="btn">
          {isProcessing ? 'Processing...' : 'Complete Payment'}
        </button>
      </form>
    </div>
  );
}

export default Checkout;
