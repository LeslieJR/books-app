import React from 'react';

import classes from './Book.module.css';
const Book=(props)=>{
    return(
        <div className={classes.Book}>
          <img src={props.image}/>
          <div >
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.publishedDate}</p>
          </div>
        </div>
    )
}

export default Book;