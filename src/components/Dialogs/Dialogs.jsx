import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
 

  return (
    <div className={styles.dialogs__wrapper}>
      <div className={styles.dialogs}>
        {props.state.dialogsData.map ((item, idx) => {
          return <DialogItem name={item.name} id={item.id} key={idx} />;
        })}

      </div>
      <div className={styles.messages}>
        {props.state.messagesData.map ((item, idx) => {
          return <MessageItem message={item.message} id={item.id} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Dialogs;
