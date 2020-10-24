import React from "react";
import styles from "./bookCard.module.css"


const BookCard = ({ books, changeCurrentBook }) => {
    return (
        <div className="card mt-3 ml-2">

            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <img alt={books.title}  src={books.img} className={styles.mainThumb} />
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-secondary btn-block float-right"
                    onClick={() => { changeCurrentBook(books) }}
                >Read more</button>
            </div>
        </div>
    )
}

export default BookCard;