import React from 'react';
import {
  changeNewMessageBodyCreator,
  sendMessageActionCreator,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
  let state = props.store.getState ().dialogsPage;

  let onMessageClick = () => {
    props.store.dispatch (sendMessageActionCreator ());
  };
  let onNewMessageChange = body => {
    props.store.dispatch (changeNewMessageBodyCreator (body));
  };

  return (
    <Dialogs
    dialogsPage={state}
    sendMessage={onMessageClick}
    updateNewMessageBody = {onNewMessageChange}
    />
  );
};

export default DialogsContainer;
