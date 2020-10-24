import React from "react";
import BookCard from "../BookCard/BookCard";
import "./BookList.css"


const BookList = ({ books, changeCurrentBook }) => {
    const allBooks = books.map(book => {
        return (
            
                <BookCard books={book} key={book._id} changeCurrentBook={changeCurrentBook} />
           
            
            )

    }
    )

    return (
    
        <div className="container-fluid  m-auto">
            <div className="row">
                <div className="col-10 offset-1 mr-2">
                    <div className="row">
                        {allBooks}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BookList;

