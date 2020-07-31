import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const FormPage = ({
  pageNumber, formStep, actions, children,
}) => {
  const formPage = cx({
    formPage: true,
    formPageCurrent: formStep === pageNumber,
  });

  return (
    <div className={formPage}>
      <div className={styles.formPageFields}>{children}</div>
      {actions && <div className={styles.formPageActions}>{actions}</div>}
    </div>
  );
};

FormPage.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  formStep: PropTypes.number.isRequired,
  actions: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default React.memo(FormPage);
