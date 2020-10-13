export const ADD_POST = 'ADD-POST';
export const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
export const CHANGE_NEW_MESSAGE_BODY = 'CHANGE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';
let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'first message', likeCount: 1},
        {id: 2, message: 'first message', likeCount: 7},
      ],
      newPostText: '',
    },

    dialogsPage: {
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
    },
  },
  getState () {
    return this._state;
  },
  subscribe (observer) {
    this.renderTree = observer;
  },
  renderTree () {
    console.log ('state changed');
  },

  dispatch (action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push (newPost);
      this._state.profilePage.newPostText = '';
      this.renderTree (this._state);
    } else if (action.type === CHANGE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this.renderTree (this._state);
    } else if (action.type === CHANGE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this.renderTree (this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.messagesData.push ({id: 6, message: body});
      body = '';
      this.renderTree (this._state);
    }
  },
};
export default store;

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const changeNewPostTextActionCreator = text => {
  return {
    type: CHANGE_NEW_POST_TEXT,
    newText: text.target.value,
  };
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const changeNewMessageBodyCreator = (text) => {
  return{
    type: CHANGE_NEW_MESSAGE_BODY,
    body: text
  }
};
