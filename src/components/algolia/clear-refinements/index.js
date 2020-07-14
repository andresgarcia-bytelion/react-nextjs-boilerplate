import React from 'react';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import MiniClose from '../../../icons/mini-close.svg';
import styles from './styles.module.scss';

const ClearRefinements = ({ items, refine }) => (
  <button
    className={styles.clearRefinements}
    type="button"
    onClick={() => refine(items)}
    disabled={!items.length}
  >
    <span className={styles.clearRefinementsLabel}>Reset Filters</span>
    <MiniClose className={styles.clearRefinementsIcon} />
  </button>
);

const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);

export default CustomClearRefinements;
