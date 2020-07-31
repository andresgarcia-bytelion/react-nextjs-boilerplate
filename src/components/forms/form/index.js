import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Form = ({ title, children }) => (
  <div className={styles.form}>
    <div className={styles.formInner}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>{title}</h3>
      </div>
      <form className={styles.formBody}>{children}</form>
    </div>
  </div>
);

Form.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default React.memo(Form);
