import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Close from '../../icons/close.svg';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Modal = ({
  title,
  children,
  modalVisibility,
  setModalVisibility,
}) => {
  const openModal = () => {
    setModalVisibility(false);
  };

  const modal = cx({
    modal: true,
    modalVisible: modalVisibility
  });

  return (
    <div className={modal}>
      <div className={styles.modalHeader}>
        <h3 className={styles.modalTitle}>{title}</h3>
        <button
          className={styles.modalClose}
          type="button"
          onClick={() => {
            openModal(true);
          }}
        >
          <Close className={styles.modalCloseIcon} />
          <span className={styles.modalCloseLabel}>Close Modal</span>
        </button>
      </div>
      <div className={styles.modalBody}>
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
