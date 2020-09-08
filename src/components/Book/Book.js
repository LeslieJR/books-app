import React from 'react';

import classes from './Book.module.css';
const Book=(props)=>{
    return(
        <div className={classes.Book}>
          <img src={props.image} alt='book'/>
          <div >
            <h2>{props.title}</h2>
            <h3>Author: {props.author}</h3>
            <p>Published Date:{props.publishedDate === '0000' ? 'Not available' : props.publishedDate.substring(0,4)}</p>
          </div>
        </div>
    )
}

export default Book;