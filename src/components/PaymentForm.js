// src/components/PaymentForm.js

import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const card = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (!error) {
      console.log("PaymentMethod:", paymentMethod);
      alert("Payment successful (test mode)");
    } else {
      console.error(error.message);
      alert("Payment failed: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <h2>Enter Payment Details</h2>
      <CardElement />
      <button type="submit" style={{ marginTop: 20 }}>Pay</button>
    </form>
  );
};

export default PaymentForm;
