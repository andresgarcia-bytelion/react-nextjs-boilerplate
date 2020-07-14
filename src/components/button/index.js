import React from 'react';
import PropTypes from 'prop-types';
import Check from '../../icons/check.svg';
import styles from './styles.module.scss';

const Button = ({
  label,
  icon,
  theme,
  onClick,
}) => {
  let iconElement = '';
  const iconClass = styles.buttonIcon;

  switch (icon) {
    case 'check':
      iconElement = <Check className={iconClass} />;
      break;
    default:
      iconElement = '';
  }

  return (
    <button
      className={`${styles.button} ${styles[`button${theme}`]}`}
      type="button"
      onClick={onClick}
    >
      <span className={styles.buttonLabel}>{label}</span>
      {iconElement}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  theme: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  icon: '',
  theme: 'default',
  onClick: () => {},
};

export default Button;
