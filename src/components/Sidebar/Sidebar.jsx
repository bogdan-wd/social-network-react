import React from 'react';
import Nav from '../Nav/Nav';
import styles from './Sidebar.module.css';
import photo from './../../../src/photo.png';
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <img src={photo} alt="" />  
      <Nav />
    </div>
  );
};

export default Sidebar;
