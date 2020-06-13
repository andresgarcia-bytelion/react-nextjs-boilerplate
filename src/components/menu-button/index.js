import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const MenuButton = ({
  menuOpen,
  setMenuOpen,
  label,
}) => (
  <button
    className={styles.menu_button}
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
};

export default MenuButton;
