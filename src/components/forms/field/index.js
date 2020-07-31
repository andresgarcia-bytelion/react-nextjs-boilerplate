import React from 'react';
import PropTypes from 'prop-types';
import { convertToId } from '../../../hooks/strings';
import styles from './styles.module.scss';

const Field = ({ label, children }) => (
  <div className={styles.formField}>
    <label className={styles.formFieldLabel} htmlFor={convertToId(label)}>{label}</label>
    <div className={styles.formFieldElement}>{children}</div>
  </div>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default React.memo(Field);
