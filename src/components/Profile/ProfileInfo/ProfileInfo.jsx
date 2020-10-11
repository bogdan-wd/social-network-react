import React from 'react';
import styles from './ProfileInfo.module.css';
import photo from '../../../../src/photo.png';

const ProfileInfo = () =>{
    return(
        <div className={styles.profile__wrapper}>
        <img src={photo} alt="" />
        <div>
          desc
        </div>
      </div>
    )
}

export default ProfileInfo