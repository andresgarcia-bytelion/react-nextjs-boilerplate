import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Field = ({ label, name, children }) => (
  <div className={styles.formField}>
    <label className={styles.formFieldLabel} htmlFor={name}>{label}</label>
    <div className={styles.formFieldElement}>{children}</div>
  </div>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default React.memo(Field);
