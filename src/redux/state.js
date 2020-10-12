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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push (newPost);
      this._state.profilePage.newPostText = '';
      this.renderTree (this._state);
    } else if (action.type = "CHANGE-NEW-POST-TEXT"){
      this._state.profilePage.newPostText = action.newText;
      this.renderTree (this._state);
    }
  },
};

export default store;
