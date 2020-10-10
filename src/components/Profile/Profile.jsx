import React from 'react';
import styles from './Profile.module.css';
import photo from '../../../src/photo.png';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={styles.profile}>
      
      <div className={styles.profile__wrapper}>
        <img src={photo} alt="" />
        <div>
          desc
        </div>
      </div>

      <MyPosts />
    </div>
  );
};

export default Profile;
