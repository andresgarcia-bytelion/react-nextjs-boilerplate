import React, { useState } from 'react';
import { useSession } from 'next-auth/client';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Dropdown from 'components/dropdown';
import ChevronDown from 'icons/chevron-down.svg';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const UserBubble = ({ items }) => {
  const [session] = useSession();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const userBubbleButtonIcon = cx({
    userBubbleButtonIcon: true,
    userBubbleButtonIconActive: dropdownVisible,
  });

  return (
    <>
      { session && (
        <div className={styles.userBubble}>
          <img
            className={styles.userBubbleImage}
            src={session.user.image}
            alt={session.user.name}
          />
          <div className={styles.userBubbleDetails}>
            <button
              className={styles.userBubbleButton}
              type="button"
              onClick={() => {
                setDropdownVisible((prevState) => !prevState);
              }}
            >
              <span className={styles.userBubbleButtonLabel}>{session.user.name}</span>
              <ChevronDown className={userBubbleButtonIcon} />
            </button>
            <Dropdown
              items={items}
              visible={dropdownVisible}
            />
          </div>
        </div>
      )}
    </>
  );
};

UserBubble.propTypes = {
  items: PropTypes.array.isRequired,
};

export default UserBubble;
