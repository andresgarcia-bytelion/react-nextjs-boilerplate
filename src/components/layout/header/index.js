import React from 'react';
import Menu from '../menu';
import styles from './styles.module.scss';

const Header = () => (
  <header className={styles.page_header}>
    <div className={styles.page_header_inner}>
      <h1>Header</h1>
      <Menu />
    </div>
  </header>
);

export default Header;
