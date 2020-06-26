import React from 'react';
import PropTypes from 'prop-types';
import Close from '../../icons/close.svg';
import styles from './styles.module.scss';

const Modal = ({
  title,
  children,
  modalVisibility,
  setModalVisibility,
}) => {
  const openModal = () => {
    setModalVisibility(false);
  };

  return (
    <div className={`${styles.modal} ${modalVisibility ? styles.modal_visible : ''}`}>
      <div className={styles.modal_header}>
        <h3 className={styles.modal_title}>{title}</h3>
        <button
          className={styles.modal_close}
          type="button"
          onClick={() => {
            openModal(true);
          }}
        >
          <Close className={styles.modal_close_icon} />
          <span className={styles.modal_close_label}>Close Modal</span>
        </button>
      </div>
      <div className={styles.modal_body}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  modalVisibility: PropTypes.bool.isRequired,
  setModalVisibility: PropTypes.bool.isRequired,
};

export default Modal;
