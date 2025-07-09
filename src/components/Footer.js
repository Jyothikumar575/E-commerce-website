import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="flipkart-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>ABOUT</h4>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Flipkart Stories</a>
        </div>

        <div className="footer-column">
          <h4>HELP</h4>
          <a href="#">Payments</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation & Returns</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-column">
          <h4>CONSUMER POLICY</h4>
          <a href="#">Return Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Security</a>
          <a href="#">Privacy</a>
        </div>

        <div className="footer-column">
          <h4>SOCIAL</h4>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Flipkart Clone by You | Built for Educational Purposes</p>
      </div>
    </footer>
  );
};

export default Footer;
