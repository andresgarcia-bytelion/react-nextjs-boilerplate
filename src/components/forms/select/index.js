import React from 'react';
import PropTypes from 'prop-types';
import Field from '../field';
import CaretDown from '../../../icons/caret-down.svg';
import styles from './styles.module.scss';

const Select = ({
  name,
  label,
  items,
  value,
  disabled,
  required,
  onChange,
}) => (
  <Field name={name} label={label}>
    <select className={styles.formSelect}>
      {items.map(item => {
        return (
          <option value={item.value} key={item.value}>{item.value}</option>
        )
      })}
    </select>
    <CaretDown className={styles.formSelectIcon} />
  </Field>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.array,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
Select.defaultProps = {
  value: '',
  required: false,
  disabled: false,
};

export default Select;
