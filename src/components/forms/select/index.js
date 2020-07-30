/* eslint-disable jsx-a11y/no-onchange */
/* react throws an error if onblur is used in place on onchange */
import React from 'react';
import PropTypes from 'prop-types';
import Field from '../field';
import CaretDown from '../../../icons/caret-down.svg';
import styles from './styles.module.scss';

const Select = ({
  name,
  label,
  items,
  disabled,
  required,
  onChange,
}) => (
  <Field name={name} label={label}>
    <select
      className={styles.formSelect}
      id={name}
      name={name}
      disabled={disabled}
      required={required}
      onChange={onChange}
    >
      {items.map((item) => (
        <option value={item.value} key={item.value}>{item.value}</option>
      ))}
    </select>
    <CaretDown className={styles.formSelectIcon} />
  </Field>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
Select.defaultProps = {
  required: false,
  disabled: false,
};

export default Select;
