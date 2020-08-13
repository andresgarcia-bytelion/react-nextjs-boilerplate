import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Tabs = ({ items }) => {
  const [currentTab, setCurrentTab] = useState(items[0].id);

  return (
    <ul className={styles.tabs}>
      {items.map((item) => {
        const tabTrigger = cx({
          tabTrigger: true,
          tabTriggerActive: currentTab === item.id,
        });

        return (
          <li className={styles.tab} key={item.id}>
            <button
              className={tabTrigger}
              onClick={() => {
                setCurrentTab(item.id);
                item.onClick();
              }}
              type="button"
            >
              {item.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Tabs.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Tabs;
