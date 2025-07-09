// src/pages/Checkout.js

import React from 'react';
import StripeContainer from '../components/StripeContainer';

const Checkout = () => {
  return (
    <div>
      <h2>Checkout Page</h2>
      <StripeContainer />
    </div>
  );
};

export default Checkout;
