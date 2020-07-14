import React from 'react';
import { connectToggleRefinement } from 'react-instantsearch-dom';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const ToggleRefinement = ({
  currentRefinement,
  label,
  refine,
  createURL,
}) => {
  const toggleHint = cx({
    toggleHint: true,
    toggleHintActive: currentRefinement,
  });

  return (
    <a
      className={styles.toggle}
      href={createURL(!currentRefinement)}
      onClick={(event) => {
        event.preventDefault();
        refine(!currentRefinement);
      }}
    >
      <span className={styles.toggleLabel}>{label}</span>
      <span className={toggleHint} />
    </a>
  );
};

const CustomToggleRefinement = connectToggleRefinement(ToggleRefinement);

export default CustomToggleRefinement;
