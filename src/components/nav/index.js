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
  const pieces = items.map((item) => {
    const currentLink = router.pathname === item.href;

    return (
      <li className={styles.nav_item}>
        <Link href={item.href}>
          <a className={`${styles.nav_link} ${currentLink ? styles.nav_link_active : ''}`} href={item.href}>{item.label}</a>
        </Link>
      </li>
    );
  });

  return (
    <nav className={styles.nav} aria-label={title}>
      <h2 className={styles.nav_title}>{title}</h2>
      <ul className={styles.nav_list}>{pieces}</ul>
    </nav>
  );
};

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Nav;
