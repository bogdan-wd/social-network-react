import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import image from './../../../src/photo.png'

const Users = props => {
  if (props.users.length === 0) {
      let base = 'https://social-network.samuraijs.com/api/1.0';
      axios.get(`${base}/users`).then(res => props.setUsers(res.data.items))
    
  }
  
  return (
    <div className={styles.wrapper}>
      {props.users.map (user => {
        return (
          <div className={styles.itemWrapper} key={user.id}>
            <div className={styles.leftPart}>
              <img
                src={user.photos.small ? null : image}
                alt="user photo"
              />
              {user.followed
                ? <button
                    onClick={() => {
                      props.unfollow (user.id);
                    }}
                  >
                    Unfollow
                  </button>
                : <button
                    onClick={() => {
                      props.follow (user.id);
                    }}
                  >
                    Follow
                  </button>}
            </div>

            <div className={styles.rightPart}>
              <div>
                <p> Name: {user.name} </p>
                <p> Status: {user.status} </p>
              </div>
              <div>
                <div>
                  City: {'user.city'}
                </div>
                <div>
                  Country: {'user.country'}
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
