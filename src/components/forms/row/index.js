import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const FormRow = ({ columns, children }) => (
  <div className={cx({
    formRow: true,
    formRowTwoColumn: columns,
  })}
  >
    {children}
  </div>
);

FormRow.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number,
};
FormRow.defaultProps = {
  columns: 1,
};

export default React.memo(FormRow);
