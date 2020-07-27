/* eslint-disable react/button-has-type */
/* expected a static string but we are passing type as a prop */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Button = ({
  label,
  icon,
  theme,
  type,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button${theme}`]}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <span className={styles.buttonLabel}>{label}</span>
      {icon && <span className={styles.buttonIcon}>{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  theme: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  icon: '',
  theme: 'default',
  type: 'button',
  disabled: false,
  onClick: () => {},
};

export default Button;
