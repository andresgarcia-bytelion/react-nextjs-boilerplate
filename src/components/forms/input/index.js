import React from 'react';
import PropTypes from 'prop-types';
import Field from '../field';
import styles from './styles.module.scss';

const Input = ({
  name,
  label,
  type,
  placeholder,
  value,
  required,
  disabled,
  onChange,
}) => (
  <Field name={name} label={label}>
    <input
      className={styles.formInput}
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      required={required}
      onChange={onChange}
    />
  </Field>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
Input.defaultProps = {
  placeholder: '',
  value: '',
  required: false,
  disabled: false,
};

export default Input;
