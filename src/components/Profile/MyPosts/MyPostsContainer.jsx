import React from 'react';
import {connect} from 'react-redux';
import {
  addPostActionCreator,
  changeNewPostTextActionCreator,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeNewPostText: body => {
      dispatch (changeNewPostTextActionCreator (body));
    },
    addPost: () => {
      dispatch (addPostActionCreator ());
    },
  };
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (
  MyPosts
);

export default MyPostsContainer;
