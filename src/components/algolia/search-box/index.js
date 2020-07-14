import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import MagnifyingGlass from '../../../icons/magnifying-glass.svg';
import MiniClose from '../../../icons/mini-close.svg';
import styles from './styles.module.scss';

const SearchBox = ({ currentRefinement, refine, placeholder }) => (
  <form className={styles.search} noValidate action="" role="search">
    <MagnifyingGlass className={styles.searchIcon} />
    <input
      className={styles.searchInput}
      type="search"
      value={currentRefinement}
      autoComplete="off"
      placeholder={placeholder}
      onChange={(event) => refine(event.currentTarget.value)}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
      }}
    />
    {currentRefinement.length > 0 && (
      <button
        className={styles.searchReset}
        type="button"
        onClick={(event) => {
          event.preventDefault();
          refine('');
        }}
      >
        <span className={styles.searchResetLabel}>Reset query</span>
        <MiniClose className={styles.searchResetIcon} />
      </button>
    )}
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
