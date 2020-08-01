import React, { useState } from 'react';
import { connectSortBy } from 'react-instantsearch-dom';
import AlphabeticalSort from 'icons/alphabetical-sort.svg';
import NumericalSort from 'icons/numerical-sort.svg';
import DefaultSort from 'icons/default-sort.svg';
import styles from './styles.module.scss';

const SortBy = ({ items, refine, label }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let icon = '';
  const iconClass = styles.sortByIcon;

  switch (label) {
    case 'name':
      icon = <AlphabeticalSort className={iconClass} />;
      break;
    case 'deal stage':
      icon = <NumericalSort className={iconClass} />;
      break;
    case 'rating':
      break;
    case 'select':
      break;
    default:
      icon = <DefaultSort className={iconClass} />;
  }

  return (
    <td className={styles.sortBy}>
      <button
        className={`${styles.sortBySorter} ${styles.sortBySorterButton}`}
        type="button"
        onClick={(event) => {
          event.preventDefault();
          refine(items[parseInt(currentIndex, 10)].value);

          if (currentIndex === 0) {
            setCurrentIndex(1);
          } else {
            setCurrentIndex(0);
          }
        }}
      >
        <span className={styles.sortByLabel}>{label}</span>
        {icon}
      </button>
    </td>
  );
};

const CustomSortBy = connectSortBy(SortBy);

export default CustomSortBy;
