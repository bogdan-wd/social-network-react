import React from 'react';
import styles from './Header.module.css';
import logo from './../../../src/logo.svg';


const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />
    </header>
  );
};

export default Header