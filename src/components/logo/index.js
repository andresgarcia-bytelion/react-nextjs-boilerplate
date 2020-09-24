import React from 'react';
import Link from 'next/link';
import Brand from '@/icons/brand.svg';
import styles from './styles.module.scss';

const Logo = () => (
  <div className={styles.logo}>
    <Link href="/">
      <a className={styles.logoLink} href="/">
        <Brand className={styles.logoIcon} />
      </a>
    </Link>
  </div>
);

export default Logo;
