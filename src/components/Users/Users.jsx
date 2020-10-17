import React from 'react';
import styles from './Users.module.css';

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers ([
      {
        id: 1,
        followed: false,
        fullName: 'name',
        status: 'boss',
        location: {city: 'dnepr', country: 'Ukraine'},
      },
      {
        id: 2,
        followed: true,
        fullName: 'name',
        status: 'boss',
        location: {city: 'dnepr', country: 'Ukraine'},
      },
      {
        id: 3,
        followed: true,
        fullName: 'name',
        status: 'boss',
        location: {city: 'dnepr', country: 'Ukraine'},
      },
    ]);
  }

  return (
    <div className={styles.wrapper}>
      {props.users.map (user => {
        return (
          <div className={styles.itemWrapper} key={user.id}>
            <div className={styles.leftPart}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                alt=""
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
                <p> Name: {user.fullName} </p>
                <p> Status: {user.status} </p>
              </div>
              <div>
                <div>
                  City: {user.location.city}
                </div>
                <div>
                  Country: {user.location.country}
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
