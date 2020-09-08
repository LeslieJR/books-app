import React from 'react';
import Book from '../../components/Book/Book';
import classes from './BookList.module.css';
const BookList=(props)=>{
    return(
        <div className={classes.BookList}>
            {
                props.books.map((book,i)=>{
                    return <Book 
                              key={i}
                              image={book.volumeInfo.imageLinks.thumbnail} 
                              title={book.volumeInfo.title}
                              author={book.volumeInfo.authors}
                              publishedDate={book.volumeInfo.publishedDate}
                            />
                })
            }
        </div>
    )
}

export default BookList;