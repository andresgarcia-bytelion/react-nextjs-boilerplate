import React from 'react';
import PropTypes from 'prop-types';
import Field from '../field';
import { convertToId } from '../../../hooks/strings';
import inputStyles from '../input/styles.module.scss';
import styles from './styles.module.scss';

const Textarea = ({
  label,
  placeholder,
  value,
  disabled,
  required,
  onChange,
}) => (
  <Field label={label}>
    <textarea
      className={`${inputStyles.formInput} ${styles.formTextarea}`}
      id={convertToId(label)}
      name={convertToId(label)}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      required={required}
      onChange={onChange}
    />
  </Field>
);

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
Textarea.defaultProps = {
  placeholder: '',
  value: '',
  required: false,
  disabled: false,
};

export default React.memo(Textarea);
