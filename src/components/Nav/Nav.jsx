import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () =>{
    return (
        <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/dialogs">Messages</NavLink></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    )
}

export default Nav