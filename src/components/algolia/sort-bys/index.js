import React from 'react';
import styles from './styles.module.scss';

const CustomSortBys = ({ children }) => (
  <thead className={styles.sortBysBody}>
    <tr className={styles.sortBys}>{children}</tr>
  </thead>
);

export default CustomSortBys;
