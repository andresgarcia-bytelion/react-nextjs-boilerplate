import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Dropdown = ({ items, visible }) => (
  <ul className={cx({
    dropdown: true,
    dropdownVisible: visible,
  })}
  >
    {items.map((item) => (
      <li className={styles.dropdownItem}>
        <button className={styles.dropdownItemButton} type="button" onClick={item.onClick}>{item.label}</button>
      </li>
    ))}
  </ul>
);

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Dropdown;
