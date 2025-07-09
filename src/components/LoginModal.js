// src/components/LoginModal.js
import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
  const [isOtpLogin, setIsOtpLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (!username || (!isOtpLogin && !password) || (isOtpLogin && !otp)) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setErrorMsg('');
    setLoginSuccess(true);
    setTimeout(() => onClose(), 1500);
  };

  return (
    <div className="login-backdrop">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Login</h2>

        {loginSuccess ? (
          <div className="success-msg">✅ Login successful!</div>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter Email or Phone"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {isOtpLogin ? (
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            ) : (
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}

            <div className="login-options">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember me
              </label>

              <button className="switch-btn" onClick={() => setIsOtpLogin(!isOtpLogin)}>
                {isOtpLogin ? 'Use Password Instead' : 'Login with OTP'}
              </button>
            </div>

            {errorMsg && <p className="error-msg">{errorMsg}</p>}

            <button className="login-btn" onClick={handleLogin}>
              {isOtpLogin ? 'Verify OTP' : 'Login'}
            </button>

            <div className="social-login">
              <button className="google-btn">Continue with Google</button>
              <button className="fb-btn">Continue with Facebook</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
