import React, { useState } from 'react';
import { FaSun, FaMoon, FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import './index.css';

const AuthForm = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [darkMode, setDarkMode] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  const toggleForm = (form) => {
    setActiveForm(form);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const togglePasswordVisibility = (form) => {
    if (form === 'login') {
      setShowLoginPassword(!showLoginPassword);
    } else {
      setShowSignupPassword(!showSignupPassword);
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="theme-toggle-wrapper">
          <button className="theme-btn" onClick={toggleDarkMode}>
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        <div className="form-toggle">
          <button 
            className={activeForm === 'login' ? 'active' : ''}
            onClick={() => toggleForm('login')}
          >
            Login
          </button>
          <button 
            className={activeForm === 'signup' ? 'active' : ''}
            onClick={() => toggleForm('signup')}
          >
            Sign Up
          </button>
        </div>

        {activeForm === 'login' ? (
          <div className="form-box">
            <h2>Login</h2>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input 
                type={showLoginPassword ? "text" : "password"} 
                id="loginPassword" 
                required 
              />
              <label>Password</label>
              <span 
                className="toggle-password" 
                onClick={() => togglePasswordVisibility('login')}
              >
                {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button className="btn">Login</button>
            <div className="social-buttons">
              <p>Or continue with:</p>
              <div className="icons">
                <a className="facebook"><FaFacebookF /></a>
                <a className="google"><FaGoogle /></a>
                <a className="github"><FaGithub /></a>
              </div>
            </div>
          </div>
        ) : (
          <div className="form-box">
            <h2>Sign Up</h2>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input type="text" id="signupName" required />
              <label>Name</label>
            </div>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input 
                type={showSignupPassword ? "text" : "password"} 
                id="signupPassword" 
                required 
              />
              <label>Password</label>
              <span 
                className="toggle-password" 
                onClick={() => togglePasswordVisibility('signup')}
              >
                {showSignupPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button className="btn">Register</button>
            <div className="social-buttons">
              <p>Or continue with:</p>
              <div className="icons">
                <a className="facebook"><FaFacebookF /></a>
                <a className="google"><FaGoogle /></a>
                <a className="github"><FaGithub /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;