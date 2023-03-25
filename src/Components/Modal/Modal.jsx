import React from 'react';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose, onConfirm }) {
  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']}>
          <h2>Confirmation</h2>
          <button type="button" className={styles['close-button']} onClick={onClose}>
            X
          </button>
        </div>
        <div className={styles['modal-body']}>
          <p>Employee has been added successfully.</p>
        </div>
        <div className={styles['modal-footer']}>
          <button type="button" className={styles['confirm-button']} onClick={onConfirm}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
