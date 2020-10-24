import React from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import Image from 'react-bootstrap/Image'

import "./BookModal.css"

const BookModal = ({ currentBook, show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title >{currentBook.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <Image alt="" className="cover pl-2 rounded" src={currentBook.img} />

                    <ListGroup variant="flush" className="about pl-3">
                        <ListGroup.Item>{currentBook.authors}</ListGroup.Item>
                        <ListGroup.Item>{currentBook.series} book {currentBook.bookInSeries}</ListGroup.Item>
                        <ListGroup.Item>{currentBook.rating}</ListGroup.Item>
                        <ListGroup.Item>{currentBook.read} </ListGroup.Item>
                        <ListGroup.Item> {currentBook.generes} </ListGroup.Item>
                        <ListGroup.Item> {currentBook.format}</ListGroup.Item>
                    </ListGroup>
                </div>

                <div className="description">
                    <p >
                        {currentBook.description}
                    </p></div>



            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-secondary" size="sm">Edit</Button>
                <Button variant="outline-secondary" size="sm">Delete</Button>
            </Modal.Footer>
        </Modal>
    )
}


export default BookModal;