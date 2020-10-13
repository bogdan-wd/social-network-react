import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

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
    profileReducer(this._state.profilePage, action)
    dialogsReducer(this._state.dialogsPage, action)

    this.renderTree(this._state)
  },
};
export default store;

