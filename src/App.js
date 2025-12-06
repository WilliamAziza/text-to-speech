import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HeroBanner />
                <div className="main-content">
                  <ProductList />
                </div>
              </>
            } />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
