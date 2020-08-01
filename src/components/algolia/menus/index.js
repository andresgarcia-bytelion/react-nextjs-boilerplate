import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Button from 'components/button';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Menus = ({ children }) => {
  const [visibility, setVisibility] = useState(false);

  const filtersBody = cx({
    filtersBody: true,
    filtersBodyVisible: visibility,
  });

  return (
    <div className={styles.filters}>
      <div className={styles.filtersTrigger}>
        <Button
          label={`${visibility ? 'Hide' : 'Show'} Filters`}
          icon="filter"
          modifier="Alt"
          onClick={() => {
            setVisibility(!visibility);
          }}
        />
      </div>
      <div className={filtersBody}>{children}</div>
    </div>
  );
};

export default Menus;
