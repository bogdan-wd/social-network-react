import React from 'react';
import styles from './Post.module.css';
import photo from '../../../../../src/photo.png'

const Post = (props) =>{
    return(
        <div>
            <img src={photo} alt=""/>
            {props.message}
        </div>
    )
}

export default Post