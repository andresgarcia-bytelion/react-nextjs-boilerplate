import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import Base from './base';
import styles from './styles.module.scss';

const Hits = ({ hits, type, children }) => (
  <table className={styles.hits}>
    {children}
    <tbody className={styles.hitsBody}>
      {hits.map((hit) => {
        let data = [];

        switch (type) {
          case 'base':
            data = Base(hit);
            break;
          default:
            return;
        }

        return (
          <tr className={styles.hit} key={hit.objectID}>
            {data.map((item, index) => (
              // leverage unique id with index since item values will never be unique
              // eslint-disable-next-line react/no-array-index-key
              <td className={styles.hitCell} key={hit.objectID + index}>
                <span className={styles.hitCellLabel}>{item.label}</span>
                <span className={styles.hitCellValue}>{item.value}</span>
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </table>
);

const CustomHits = connectHits(Hits);

export default CustomHits;
