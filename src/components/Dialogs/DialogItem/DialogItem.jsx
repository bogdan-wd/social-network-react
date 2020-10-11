import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
  return (
    
      <div className={styles.dialogs__items}>
        <div className={styles.dialog}>
          <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
      </div>
    
  );
};

export default DialogItem;
