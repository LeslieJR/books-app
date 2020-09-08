import React, {Component} from "react";
import SearchArea from "../../components/SearchArea/SearchArea";
import request from 'superagent';
import BookList from '../BookList/BookList'
class Books extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[],
            searchField:'',
            sort:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.fetchBooks=this.fetchBooks.bind(this);
        this.handleSort=this.handleSort.bind(this);
    }

    fetchBooks(event){
        event.preventDefault();
        request.get(`https://www.googleapis.com/books/v1/volumes`)
          .query({q: this.state.searchField})
            .then((res)=>{
                this.setState({books: [...res.body.items]})
            })
    }

    handleChange(event) {
        this.setState({ searchField: event.target.value })
    }

    handleSort(event){
        this.setState({
            sort: event.target.value
        })
    }
    render(){
        return(
            <div>
                <SearchArea 
                searchBooks={this.fetchBooks} 
                handleChange={this.handleChange} 
                handleSort={this.handleSort}/>
                <BookList books={this.state.books}/>
            </div>
        )
    }
}

export default Books;