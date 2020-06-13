import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Modal = ({ children }) => (
  <div className={styles.modal}>
    <div className={styles.modal_inner}>
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
