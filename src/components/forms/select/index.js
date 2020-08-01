/* eslint-disable jsx-a11y/no-onchange */
/* react throws an error if onblur is used in place on onchange */
import React from 'react';
import PropTypes from 'prop-types';
import Field from '../field';
import CaretDown from '../../../icons/caret-down.svg';
import { convertToId } from '../../../hooks/strings';
import styles from './styles.module.scss';

const Select = ({
  label,
  name,
  items,
  value,
  disabled,
  required,
  onChange,
}) => (
  <Field label={label} name={name}>
    <select
      className={styles.formSelect}
      id={name}
      name={name}
      value={value}
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
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
Select.defaultProps = {
  required: false,
  disabled: false,
};

export default React.memo(Select);
