import React from "react";
import './modal.css';

const Modal = ({ active, onModalClose, children }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => onModalClose()}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;