import {CHANGE_NEW_MESSAGE_BODY, SEND_MESSAGE} from './actionTypes';

let initialState = {
  dialogsData: [
    {id: 1, name: 'User1'},
    {id: 2, name: 'User2'},
    {id: 3, name: 'User3'},
  ],

  messagesData: [
    {id: 1, message: 'message1'},
    {id: 2, message: 'message2'},
    {id: 3, message: 'message3'},
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {

  let newState = {
    ...state,
  }

  switch (action.type) {
    case CHANGE_NEW_MESSAGE_BODY:
      newState.newMessageBody = action.body;
      return newState;
    case SEND_MESSAGE:
      let body = newState.newMessageBody;
      newState.messagesData.push ({id: 6, message: body});
      newState.newMessageBody = '';
      return newState;

    default:
      return state;
  }
};
export default dialogsReducer;

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const changeNewMessageBodyCreator = text => {
  return {
    type: CHANGE_NEW_MESSAGE_BODY,
    body: text,
  };
};
