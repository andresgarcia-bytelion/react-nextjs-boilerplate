import React from 'react';
import { connectPagination } from 'react-instantsearch-dom';
import CaretLeft from '@/icons/caret-left.svg';
import CaretRight from '@/icons/caret-right.svg';
import styles from './styles.module.scss';

const Pagination = ({ currentRefinement, nbPages, refine }) => (
  <nav className={styles.pagination} role="navigation">
    <div className={styles.paginationInfo}>
      <span className={styles.paginationHint}>Viewing Page </span>
      <span className={styles.paginationLabel}>{currentRefinement}</span>
      <span className={styles.paginationHint}> of </span>
      <span className={styles.paginationLabel}>{nbPages}</span>
    </div>
    <div className={styles.paginationArrows}>
      <button
        className={styles.paginationArrow}
        type="button"
        onClick={(event) => {
          event.preventDefault();
          refine(currentRefinement - 1);
        }}
        disabled={currentRefinement === 1}
      >
        <CaretLeft className={styles.paginationArrowIcon} />
        <span className={styles.paginationArrowLabel}>Previous</span>
      </button>
      <button
        className={styles.paginationArrow}
        type="button"
        onClick={(event) => {
          event.preventDefault();
          refine(currentRefinement + 1);
        }}
        disabled={currentRefinement === nbPages}
      >
        <CaretRight className={styles.paginationArrowIcon} />
        <span className={styles.paginationArrowLabel}>Next</span>
      </button>
    </div>
  </nav>
);

const CustomPagination = connectPagination(Pagination);

export default CustomPagination;
