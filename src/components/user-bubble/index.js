import React from 'react';
import { useSession } from 'next-auth/client';
import styles from './styles.module.scss';

const UserBubble = () => {
  const [session] = useSession();

  return (
    <>
      { session && (
        <div className={styles.userBubble}>
          <img
            className={styles.userBubbleImage}
            src={session.user.image}
            alt={session.user.name}
          />
          <span className={styles.userBubbleName}>{session.user.name}</span>
        </div>
      )}
    </>
  );
};

export default UserBubble;
