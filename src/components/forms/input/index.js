import React from 'react';
import PropTypes from 'prop-types';
import Field from '@/components/forms/field';
import styles from './styles.module.scss';

const Input = ({
  label,
  name,
  placeholder,
  value,
  type,
  disabled,
  required,
  onChange,
}) => (
  <Field label={label} name={name}>
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
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
Input.defaultProps = {
  placeholder: '',
  value: '',
  required: false,
  disabled: false,
};

export default React.memo(Input);
