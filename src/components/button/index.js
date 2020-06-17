import React from 'react';
import PropTypes from 'prop-types';
import Check from '../../icons/check.svg';
import styles from './styles.module.scss';

const Button = ({
  label,
  icon,
  theme,
  event,
}) => {
  let iconElement = '';
  const iconClass = styles.button_icon;

  switch (icon) {
    case 'check':
      iconElement = <Check className={iconClass} />;
      break;
    default:
      iconElement = '';
  }

  return (
    <button
      className={`${styles.button} ${styles[`button_${theme}`]}`}
      type="button"
      onClick={event}
    >
      <span className={styles.button_label}>{label}</span>
      {iconElement}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  theme: PropTypes.string,
  event: PropTypes.func,
};

Button.defaultProps = {
  icon: '',
  theme: 'default',
  event: () => {},
};

export default Button;
