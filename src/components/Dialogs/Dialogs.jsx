import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={styles.dialogs__wrapper}>
      <div className={styles.dialogs}>
        <div className={styles.dialogs__items}>
          <div className={styles.dialog}>
             <NavLink to="/dialogs/1">User 1</NavLink>
          </div>
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.messages__items}>
          <div className={styles.message}>message 1</div>
          <div className={styles.message}>message 2</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
