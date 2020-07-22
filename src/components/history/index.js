import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ArrowLeft from '../../icons/arrow-left.svg';
import styles from './styles.module.scss';

const propTypes = {
  paths: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const History = ({ paths }) => {
  const items = paths.map((item, index) => {
    if (item.path) {
      return (
        <Link href={item.path} key={item.label}>
          <a
            className={`${styles.historyItem} ${styles.historyItemLink}`}
            href={item.path}
          >
            {index === 0 && <ArrowLeft className={styles.historyIcon} />}
            <span className={styles.historyLabel}>{item.label}</span>
            <span className={styles.historyDivider}> / </span>
          </a>
        </Link>
      );
    }
    return (
      <h2 className={`${styles.historyItem} ${styles.historyItemPage}`} key={item.label}>
        <span className={styles.historyLabel}>{item.label}</span>
      </h2>
    );
  });

  return (
    <div className={styles.history}>
      <div className={styles.historyItems}>{items}</div>
    </div>
  );
};

History.propTypes = propTypes;

export default History;
