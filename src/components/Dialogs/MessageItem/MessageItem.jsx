import React from 'react';
import styles from './MessageItem.module.css';

const MessageItem = (props) => {
  return (
    <div className={styles.messages__items}>
      <div className={styles.message}>{props.message}</div>
    </div>
  );
};

export default MessageItem;
