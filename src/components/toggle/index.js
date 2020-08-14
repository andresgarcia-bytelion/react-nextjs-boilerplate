import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Toggle = ({ label, onClick }) => {
  const [active, setActive] = useState(false);

  const toggleHint = cx({
    toggleHint: true,
    toggleHintActive: active,
  });

  return (
    <button
      className={styles.toggle}
      type="button"
      onClick={() => {
        setActive((prevState) => !prevState);

        if (onClick) {
          onClick();
        }
      }}
    >
      <span className={styles.toggleLabel}>{label}</span>
      <span className={toggleHint} />
    </button>
  );
};

Toggle.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
