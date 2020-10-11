import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
console.log(props);
  return (
    <div>
      my posts
      <div>
        <textarea name="" id="" cols="70" rows="5" />
        <button>Add post</button>
      </div>
      {props.posts.map((item, idx) =>{
        return (
          <Post message={item.message} id={item.id} key={idx}/>
        )
      })}
    </div>
  );
};

export default MyPosts;
