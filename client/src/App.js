import React, { Component } from "react";
import { BrowserRouter, Route, } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import BookList from "./components/BookList/BookList";
import BookModal from "./components/BookModal/BookModal";
import AddBook from "./components/AddBook/AddBook";



class App extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            currentBook: {},
            show: false
        }
    }

    addNewBookToState = (book) =>{
this.setState({
    books:[...this.state.books, book]
})
    }

    changeCurrentBook = (book) => {
        this.setState({ currentBook: book })
        this.handleShow()
    }

    handleClose = () => {
        this.setState({ show: false })
    }
    handleShow = () => {
        this.setState({ show: true })
    }


    componentDidMount() {
        fetch('http://localhost:9000/api/books')
            .then(res => res.json())
            .then(books => this.setState({ books },
                () => console.log("Vidimo knjige", books))
            )
    }




    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route path="/" exact>
                    <HomePage />

                    <ul>
                        {this.state.books.map(book =>
                            <li key={book._id}>{book.title}</li>)}
                    </ul>

                </Route>
                <Route path="/books">
                    <BookList
                        books={this.state.books}
                        changeCurrentBook={this.changeCurrentBook} />
                </Route>
                <Route>
                <BookModal path="/books"
                    show={this.state.show}
                    currentBook={this.state.currentBook}
                    handleClose={this.handleClose} />
                </Route>
            <Route path="/add"> 
                <AddBook addNewBookToState={this.addNewBookToState}/>
            </Route>

            </BrowserRouter>
        )
    }
}




export default App;