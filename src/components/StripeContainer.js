// src/components/StripeContainer.js

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm"; // We'll create this next

// Replace this with your real publishable key from Stripe dashboard
const PUBLIC_KEY = "pk_test_51Rgq50P7BlGR1omDXAqrQxZWmFOokfzoH4MMtGlofZSWKtdsEyErOpeUutBuiYBSoyjDrQi0vOEuRdseKhPAUcvs00vtgvdAG3";

const stripePromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
