import React from 'react';
import styles from './Profile.module.css';
import logo from '../../../src/logo.svg'

const Profile = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        avatar + desc
      </div>
      <div>
        posts
        <div>
          new post
        </div>
      </div>
    </div>
  );
};

export default Profile;
