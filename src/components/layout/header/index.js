import React from 'react';
import Menu from '@/components/layout/menu';
import Logo from '@/components/logo';
import styles from './styles.module.scss';

const Header = () => (
  <header className={styles.pageHeader}>
    <div className={styles.pageHeaderInner}>
      <Logo />
      <Menu />
    </div>
  </header>
);

export default React.memo(Header);
