import React from 'react';
import classes from './SearchArea.module.css';
const SearchArea = (props) => {
    return(
        <div className={classes.SearchArea}>
            <form onSubmit={props.searchBooks}>
                <input type="text" onChange={props.handleChange}/>
                <button type="submit">Submit</button>
                <select  
                    defaultValue="sort"
                    onChange={props.handleSort}
                    name=""
                >
                    <option disabled value="sort">Sort by:</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </form>
        </div>
    )
}

export default SearchArea;