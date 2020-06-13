import React from 'react';
import Nav from '../../nav';
import styles from './styles.module.scss';

const Header = () => (
  <header className={styles.page_header}>
    <div className={styles.page_header_inner}>
      <h1>Header</h1>
      <Nav
        title="Main Menu"
        items={[
          {
            href: '/',
            label: 'Home',
          },
          {
            href: '/components',
            label: 'Components',
          },
        ]}
      />
    </div>
  </header>
);

export default Header;
