import React, { useState, useEffect, useRef } from 'react';
import { connectMenu } from 'react-instantsearch-dom';
import classNames from 'classnames/bind';
import Select from '../../../icons/select.svg';
import Close from '../../../icons/close.svg';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Menu = ({
  items, currentRefinement, refine, label,
}) => {
  const [visibility, setVisibility] = useState(false);
  const filter = useRef(null);

  const bodyClick = (event) => {
    if (filter.current && !filter.current.contains(event.target)) {
      setVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', bodyClick);

    return () => document.removeEventListener('click', bodyClick);
  }, []);

  return (
    <div className={styles.filter} ref={filter}>
      <button
        className={styles.filterButton}
        disabled={items.length <= 0}
        type="button"
        onClick={() => {
          setVisibility(!visibility);
        }}
      >
        <span className={styles.filterButtonLabel}>
          {currentRefinement || label}
        </span>
        <Select className={styles.filterButtonIcon} />
      </button>
      <ul className={cx({
        filterDropdown: true,
        filterDropdownVisible: visibility,
      })}
      >
        {items.map((item) => {
          const isActive = currentRefinement === item.label;

          return (
            <li className={styles.filterDropdownItem} key={item.value}>
              <button
                className={`${styles.filterDropdownLink} ${
                  isActive ? styles.filterDropdownLinkActive : ''
                }`}
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  refine(item.value);
                }}
              >
                <span className={styles.filterDropdownLabel}>
                  {item.label}
                </span>
                <Close
                  className={`${styles.filterDropdownIcon} ${
                    isActive ? styles.filterDropdownIconActive : ''
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CustomMenu = connectMenu(Menu);

export default CustomMenu;
