import React from 'react';
import Menu from 'components/layout/menu';
import styles from './styles.module.scss';

const Header = () => (
  <header className={styles.pageHeader}>
    <div className={styles.pageHeaderInner}>
      <h1>Header</h1>
      <Menu />
    </div>
  </header>
);

export default React.memo(Header);
