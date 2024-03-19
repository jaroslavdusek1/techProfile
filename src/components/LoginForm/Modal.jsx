import React from 'react';
import './Modal.css';

/**
 * The Modal component serves as a general modal window that can display various content.
 * The window is only displayed when its 'show' property is true.
 * It also contains a close button that triggers the provided 'onClose' function.
 * 
 * @function
 * @param {Object} props - The properties of the component.
 * @param {boolean} props.show - Determines whether the modal window should be displayed.
 * @param {Function} props.onClose - The function to call to close the modal window.
 * @param {JSX.Element} props.children - The content to display inside the modal window.
 * @returns {JSX.Element | null} The component returns the modal window or null.
 */

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
