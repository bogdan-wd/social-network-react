import React from 'react';
import { changeNewMessageBodyCreator, changeNewPostTextActionCreator, sendMessageActionCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = props => {
  let state = props.store.getState().dialogsPage

  let onMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator())
  };
  let onNewMessageChange = (e) =>{
    props.store.dispatch(changeNewMessageBodyCreator(e.target.value))
  }

  return (
    <div className={styles.dialogs__wrapper}>
      <div className={styles.dialogs}>
        {state.dialogsData.map ((item, idx) => {
          return <DialogItem name={item.name} id={item.id} key={idx} />;
        })}

      </div>
      <div className={styles.messages}>
        {state.messagesData.map ((item, idx) => {
          return <MessageItem message={item.message} id={item.id} key={idx} />;
        })}
        <div>
          <div>
            <textarea
              value={state.newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            />
          </div>
          <div><button onClick={onMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
