import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  let addPost = () => {
    props.dispatch ({type: 'ADD-POST'});
  };

  let onPostChange = e => {
    props.dispatch({
      type: 'CHANGE-NEW-POST-TEXT',
      newText: e.target.value
    });
  };

  return (
    <div>
      my posts
      <div>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          cols="70"
          rows="5"
        />
        <button onClick={addPost}>Add post</button>
      </div>
      {props.posts.map ((item, idx) => {
        return <Post message={item.message} id={item.id} key={idx} />;
      })}
    </div>
  );
};

export default MyPosts;
