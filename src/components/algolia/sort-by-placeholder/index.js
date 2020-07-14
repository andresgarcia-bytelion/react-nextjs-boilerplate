import React from 'react';
import styles from '../sort-by/styles.module.scss';

const CustomSortByPlaceholder = ({ label }) => {
  return (
    <td className={styles.sortBy}>
      <span className={styles.sortBySorter}>
        <span className={styles.sortByLabel}>{label}</span>
      </span>
    </td>
  );
};

export default CustomSortByPlaceholder;
