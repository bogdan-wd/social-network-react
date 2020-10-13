import {ADD_POST, CHANGE_NEW_POST_TEXT} from './actionTypes';

let initialState = {
  posts: [
    {id: 1, message: 'first message', likeCount: 1},
    {id: 2, message: 'first message', likeCount: 7},
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
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
