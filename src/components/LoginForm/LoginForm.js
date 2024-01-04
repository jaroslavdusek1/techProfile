import React, { useState } from 'react';
import './LoginForm.css';

/**
 * A simple login modal component.
 * 
 * @param {Object} props - Component props.
 * @param {Function} props.onClose - Function to close the modal.
 */
const LoginModal = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Handles the submission of the login form.
   * Logs the username and password to the console (for demonstration purposes).
   * Closes the modal after submission.
   */
  const handleSubmit = () => {
    console.log('Login with:', username, password);
    onClose();
  };

  return (
    <div className="login-modal">
      <div className="login-content">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Enter</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginModal;
