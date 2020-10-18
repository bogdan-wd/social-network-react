import * as axios from 'axios';
import React, {Component} from 'react';
import styles from './Users.module.css';
import image from './../../../src/photo.png';

class Users extends Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      let base = 'https://social-network.samuraijs.com/api/1.0';
      let currentPage = this.props.currentPage;
      let pageSize = this.props.pageSize;
      axios
        .get (`${base}/users?page=${currentPage}&count=${pageSize}`)
        .then (res => this.props.setUsers (res.data.items));
    }
  };
  componentDidMount () {
    this.getUsers ();
  }

  render () {
    let pagesCount = Math.ceil (
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push (i);
    }
    console.log (this.props.currentPage);
    return (
      <div className={styles.wrapper}>

        <div>
          {pages.map ((page, idx) => {
            return (
              <span
                key={idx}
                className={
                  this.props.currentPage === page && styles.selectedPage
                }
              >
                {' '}{page}{' '}
              </span>
            );
          })}
        </div>

        {this.props.users.map (user => {
          return (
            <div className={styles.itemWrapper} key={user.id}>
              <div className={styles.leftPart}>
                <img src={user.photos.small ? null : image} alt="user photo" />
                {user.followed
                  ? <button
                      onClick={() => {
                        this.props.unfollow (user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  : <button
                      onClick={() => {
                        this.props.follow (user.id);
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
  }
}

export default Users;
