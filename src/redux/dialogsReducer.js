import {CHANGE_NEW_MESSAGE_BODY, SEND_MESSAGE} from './actionTypes';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.messagesData.push ({id: 6, message: body});
      state.newMessageBody = '';
      return state;

    default:
      return state;
  }
};

export default dialogsReducer;
