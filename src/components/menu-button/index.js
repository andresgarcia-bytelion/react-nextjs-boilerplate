import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const MenuButton = ({
  menuOpen,
  setMenuOpen,
  label,
  theme,
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
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

MenuButton.defaultProps = {
  theme: 'default',
};

export default MenuButton;
