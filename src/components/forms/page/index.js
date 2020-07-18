import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const FormPage = ({ actions, formStep, pageNumber, children }) => {
  const formPage = cx({
    formPage: true,
    formPageCurrent: formStep === pageNumber
  });

  return (
    <div className={formPage}>
      <div className={styles.formPageFields}>{children}</div>
      {actions && <div className={styles.formPageActions}>{actions}</div>}
    </div>
  );
};

export default FormPage;
