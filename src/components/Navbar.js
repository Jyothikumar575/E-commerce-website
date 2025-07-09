import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import CartDrawer from './CartDrawer'; 
import './Navbar.css';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">Flipkart Clone</Link>
      </div>

      <div className="navbar-center">
        <input 
          type="text" 
          placeholder="Search for products, brands and more" 
          className="search-input" 
        />
      </div>

      <div className="navbar-right">
        {/* Login Dropdown */}
        <div className="login-dropdown" onClick={() => setShowLogin(true)}>
          <span className="login-text">Login</span>
          <div className="login-hover-box">
            <p>New Customer?</p>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>

        {/* Cart Link */}
        <Link to="/cart" className="cart-link">
          🛒 Cart
        </Link>

        {/* Become a Seller */}
        <div className="seller-link">
          <span>Become a Seller</span>
        </div>
      </div>

      {/* Modals */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)} />
    </nav>
  );
};

export default Navbar;
