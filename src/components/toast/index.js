import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Close from 'icons/close.svg';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Toast = ({
  icon, label, setVisible, visible,
}) => {
  const toast = cx({
    toast: true,
    toastVisible: visible,
  });

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <div className={toast}>
      {icon && <span className={styles.toastIcon}>{icon}</span>}
      <span className={styles.toastLabel}>{label}</span>
      <button
        className={styles.toastClose}
        type="button"
        onClick={() => {
          setVisible(false);
        }}
      >
        <span className={styles.toastCloseIcon}><Close /></span>
      </button>
    </div>
  );
};

Toast.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string.isRequired,
  setVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

Toast.defaultProps = {
  icon: null,
};

export default Toast;
