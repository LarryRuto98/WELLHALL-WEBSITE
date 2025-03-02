import React, { useState } from 'react';
import { loginUser, registerUser } from '../services/api';
import './LoginSignUp.css';

function LoginSignUp({ handleLogin, handleSignUp, setShowLoginSignUp, error }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState('');

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validate password length
  const validatePassword = (password) => {
    return password.length >= 6; // Minimum 6 characters
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and password
    if (!validateEmail(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setFormError('Password must be at least 6 characters long.');
      return;
    }

    setIsLoading(true);
    setFormError('');

    try {
      let data;
      if (isLogin) {
        // Call loginUser from api.jsx
        data = await loginUser(email, password);
        handleLogin(data.access_token, data.user); // Pass token and user data to parent
      } else {
        // Call registerUser from api.jsx
        data = await registerUser(name, email, password);
        handleSignUp(data.access_token, data.user); // Pass token and user data to parent
      }

      setShowLoginSignUp(false); // Close the modal on success
    } catch (error) {
      setFormError(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle between login and signup modes
  const toggleMode = () => {
    setName('');
    setEmail('');
    setPassword('');
    setFormError('');
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      {error && <p className="error-message">{error}</p>}
      {formError && <p className="error-message">{formError}</p>}
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>
        )}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <button
        className="toggle-button"
        onClick={toggleMode}
        aria-label={isLogin ? 'Switch to sign up' : 'Switch to login'}
      >
        {isLogin ? 'Create an account' : 'Already have an account? Login'}
      </button>
      {isLogin && (
        <button
          type="button"
          className="forgot-password-button"
          onClick={() => alert('Forgot password feature coming soon!')}
        >
          Forgot Password?
        </button>
      )}
      <button
        className="close-button"
        onClick={() => setShowLoginSignUp(false)}
        aria-label="Close login/signup form"
      >
        Close
      </button>
    </div>
  );
}

export default LoginSignUp;