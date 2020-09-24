import React from 'react';
import styles from '@/components/algolia/sort-by/styles.module.scss';

const CustomSortByPlaceholder = ({ label }) => (
  <td className={styles.sortBy}>
    <span className={styles.sortBySorter}>
      <span className={styles.sortByLabel}>{label}</span>
    </span>
  </td>
);

export default CustomSortByPlaceholder;
