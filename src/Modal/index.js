import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) { //Que pueda teletransportar cualquier hijo que venga por dentro
  return ReactDOM.createPortal(
    <div className="clase-modal">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };