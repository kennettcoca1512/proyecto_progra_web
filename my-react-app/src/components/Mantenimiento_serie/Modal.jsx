import React from 'react';
import './Modal.css';
/*
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close" onClick={onClose}>X</button>
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;*/
  
const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;