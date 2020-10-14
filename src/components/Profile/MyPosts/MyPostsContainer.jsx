import React from 'react';
import {
  addPostActionCreator,
  changeNewPostTextActionCreator,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = props => {
  let state = props.store.getState()

  let addPost = () => {
    props.store.dispatch (addPostActionCreator ());
  };

  let onPostChange = body => {
    props.store.dispatch (changeNewPostTextActionCreator (body));
  };

  return (
    <MyPosts
      posts={state.profilePage.posts}
      addPost={addPost}
      changeNewPostText={onPostChange}
      newPostText = {state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
