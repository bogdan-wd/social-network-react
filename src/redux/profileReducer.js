import {ADD_POST, CHANGE_NEW_POST_TEXT} from './actionTypes';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      state.posts.push (newPost);
      state.newPostText = '';
      return state;
    case CHANGE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
      default:
          return state;
  }
};

export default profileReducer;
