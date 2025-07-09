// src/components/CartDrawer.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  return (
    <>
      <div className={`cart-backdrop ${isOpen ? 'show' : ''}`} onClick={onClose}></div>

      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={onClose}>✖</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>₹{item.price}</p>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
