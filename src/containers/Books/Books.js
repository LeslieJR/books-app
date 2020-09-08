import React, {Component} from "react";
import SearchArea from "../../components/SearchArea/SearchArea";
import request from 'superagent';
import BookList from '../BookList/BookList'
import notavailable from '../../assets/images/notavailable.png'
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
                const cleanData = this.cleanData(res);
                this.setState({books: cleanData})
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

    cleanData = (data) => {
        const cleanData = data.body.items.map((book)=>{
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false){
                book.volumeInfo['publishedDate'] = '0000'
            }else if(book.volumeInfo.hasOwnProperty('imageLinks') === false){
                book.volumeInfo['imageLinks'] = {thumbnail: notavailable}
            }
            return book;
        })
        return cleanData;
    }
    render(){
        const sortedBooks = this.state.books.sort((a,b)=>{
            if(this.state.sort === "newest"){
                return parseInt(b.volumeInfo.publishedDate.substring(0,4))- parseInt(a.volumeInfo.publishedDate.substring(0,4)) 
            }else if(this.state.sort === "oldest"){
                return parseInt(a.volumeInfo.publishedDate.substring(0,4))- parseInt(b.volumeInfo.publishedDate.substring(0,4)) 
            }
            return this.state.books
        })
        return(
            <div>
                <SearchArea 
                searchBooks={this.fetchBooks} 
                handleChange={this.handleChange} 
                handleSort={this.handleSort}/>
                <BookList books={sortedBooks}/>
            </div>
        )
    }
}

export default Books;