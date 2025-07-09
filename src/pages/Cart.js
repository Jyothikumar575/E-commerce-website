// src/pages/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Cart 🛒</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #ccc',
                padding: '10px 0',
              }}
            >
              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p>₹ {Math.round(item.price * 83)} × {item.quantity}</p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    borderRadius: '5px'
                  }}
                >
                  Remove
                </button>
              </div>
              <img src={item.image} alt={item.title} style={{ height: '100px', marginLeft: '20px' }} />
            </div>
          ))}
          <h2 style={{ marginTop: '30px' }}>Total: ₹ {Math.round(total * 83)}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;

