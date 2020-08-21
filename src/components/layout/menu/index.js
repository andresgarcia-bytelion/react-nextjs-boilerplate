import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import OnClickOutside from 'hooks/on-click-outside';
import MenuButton from 'components/menu-button';
import Nav from 'components/nav';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pageMenuWrapperRef = useRef();

  OnClickOutside(pageMenuWrapperRef, () => setMenuOpen(false));

  return (
    <div className={styles.pageMenuWrapper} ref={pageMenuWrapperRef}>
      <MenuButton
        label="Menu"
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className={cx({
        pageMenu: true,
        pageMenuOpen: menuOpen,
      })}
      >
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
            {
              href: '/algolia',
              label: 'Algolia',
            },
          ]}
        />
        <MenuButton
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          label="Close Menu"
        />
      </div>
    </div>
  );
};

export default Menu;
