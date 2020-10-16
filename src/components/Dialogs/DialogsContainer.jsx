import React from 'react';
import {connect} from 'react-redux';
import {
  changeNewMessageBodyCreator,
  sendMessageActionCreator,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: body => {
      dispatch (changeNewMessageBodyCreator (body));
    },
    sendMessage: () => {
      dispatch (sendMessageActionCreator ());
    },
  };
};

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
