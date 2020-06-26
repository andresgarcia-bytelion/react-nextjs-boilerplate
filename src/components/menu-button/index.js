import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const MenuButton = ({
  label,
  theme,
  menuOpen,
  setMenuOpen,
}) => (
  <button
    className={`${styles.menu_button} ${styles[`menu_button_${theme}`]}`}
    type="button"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {label}
  </button>
);

MenuButton.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.string,
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

MenuButton.defaultProps = {
  theme: 'default',
};

export default MenuButton;
