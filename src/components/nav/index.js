import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Nav = ({
  title,
  items,
}) => {
  const router = useRouter();

  return (
    <nav className={styles.nav} aria-label={title}>
      <h2 className={styles.navTitle}>{title}</h2>
      <ul className={styles.navList}>{items.map((item) => {
        const currentLink = router.pathname === item.href;

        return (
          <li className={styles.navItem} key={item.href}>
            <Link href={item.href}>
              <a className={`${styles.navLink} ${currentLink ? styles.navLinkActive : ''}`} href={item.href}>{item.label}</a>
            </Link>
          </li>
        );
      })}</ul>
    </nav>
  );
};

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Nav;
