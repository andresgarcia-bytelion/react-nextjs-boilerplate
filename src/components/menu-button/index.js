import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const MenuButton = ({
  label,
  menuOpen,
  setMenuOpen,
}) => (
  <button
    className={styles.menuButton}
    type="button"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {label}
  </button>
);

MenuButton.propTypes = {
  label: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default MenuButton;
