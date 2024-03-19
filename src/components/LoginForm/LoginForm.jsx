import './LoginForm.css';
import React, { useState } from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

/**
 * The `LoginModal` component renders a login modal dialog, enabling user authentication. 
 * It incorporates input fields for username and password, and provides 'Enter' and 'GUEST' buttons.
 * On successful authentication, it retains user context, while the 'GUEST' button allows 
 * users to proceed without authentication, redirecting them to a home page. The component 
 * also features a help modal offering additional information.
 *
 * @function
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.onClose - Callback function to trigger on closing the modal.
 * @returns {JSX.Element} - The rendered login modal component.
 */

const LoginModal = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowState] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = () => {
    setLoginFailed(true);
    setShowState(true);
  };

  const handleHelpClick = () => {
    setShowHelp(true);
  };

  const handleGuestClick = () => {
    navigate('/home');
    onClose();
  };

  return (
    <div className="login-modal">
      <div className="login-content">
        <div className="help-icon" onClick={handleHelpClick}>?</div>
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
        <button onClick={handleGuestClick}>GUEST</button>
      </div>
  
      {showModal && (
        <Modal show={showModal} onClose={() => { setShowState(false); setLoginFailed(false); }}>
          {loginFailed && <div className="login-failure">Login has failed</div>}
        </Modal>
      )}

      <Modal show={showHelp} onClose={() => setShowHelp(false)}>
        <p>if you dont have credentials, you can log in as a guest</p>
      </Modal>
    </div>
  );
};

export default LoginModal;
