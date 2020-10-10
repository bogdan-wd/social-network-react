import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea name="" id="" cols="70" rows="5" />
        <button>Add post</button>
      </div>
      <Post message="hi, how are you"/>
    </div>
  );
};

export default MyPosts;
