import React, { useState } from 'react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import { loginUser, registerUser } from './services/api';
import './App.css';

function App() {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleLogin = async (email, password) => {
    setError('');
    try {
      const data = await loginUser(email, password);
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        setUser(data.user);
        setIsLoggedIn(true);
        setShowSecondPage(true);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleSignUp = async (name, email, password) => {
    setError('');
    try {
      const data = await registerUser(name, email, password);
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        setUser(data.user);
        setIsLoggedIn(true);
        setShowSecondPage(true);
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsLoggedIn(false);
    setShowSecondPage(false);
  };

  return (
    <div className="App">
      {!showSecondPage ? (
        <FirstPage
          setShowSecondPage={setShowSecondPage}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          error={error}
        />
      ) : (
        <SecondPage
          isLoggedIn={isLoggedIn}
          user={user}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          handleLogout={handleLogout}
          error={error}
        />
      )}
    </div>
  );
}

export default App;