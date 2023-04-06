/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

function Modal({
  title, message, buttonText, isOpen, onClose, titleStyle, messageStyle, buttonStyle, modalStyle,
}) {
  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ''}`} style={modalStyle}>
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']} style={titleStyle}>
          <h2>{title}</h2>
          <button type="button" className={styles['close-button']} onClick={onClose}>
            X
          </button>
        </div>
        <div className={styles['modal-body']} style={messageStyle}>
          <p>{message}</p>
        </div>
        <div className={styles['modal-footer']}>
          <button type="button" className={`${styles['confirm-button']} ${buttonStyle}`} onClick={onClose}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  titleStyle: {},
  messageStyle: {},
  buttonStyle: '',
  modalStyle: {},
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  titleStyle: PropTypes.object,
  messageStyle: PropTypes.object,
  buttonStyle: PropTypes.string,
  modalStyle: PropTypes.object,
};

export default Modal;
