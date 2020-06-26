import React, { useState, useRef } from 'react';
import OnClickOutside from '../../../hooks/on-click-outside';
import MenuButton from '../../menu-button';
import Nav from '../../nav';
import styles from './styles.module.scss';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const node = useRef();

  OnClickOutside(node, () => setMenuOpen(false));

  return (
    <div className={styles.page_menu_wrapper} ref={node}>
      <MenuButton
        label="Menu"
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className={`${styles.page_menu} ${menuOpen ? styles.page_menu_open : ''}`}>
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
        <MenuButton
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          label="Close Menu"
          theme="alt"
        />
      </div>
    </div>
  );
};

export default Menu;
