import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class AddBook extends Component {
    state = {
        newBook: {
            img: "", title: "", author: "", series: "", bookInSeries: "", rating: [''], read: "", generes: [''], format: ['']
        }
    }

    changeHandler = (event) => {
        console.log(this.props)
        let id = event.target.id;
        let newBookCopy = { ...this.state.newBook }
        newBookCopy[id] = event.target.value;
        this.setState({ newBook: newBookCopy })
    }

    addNewBook = () => {
        this.props.addNewBookToState(this.state.newBook)
        this.props.history.push("/books")
    }
    render() {
        return (
            <Form className="container">

                <div className="mb-3">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Img URL</Form.Label>
                        <Form.Control type="text" placeholder="Img URL" onChange={this.changeHandler} id="img" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Book title</Form.Label>
                            <Form.Control onChange={this.changeHandler} id="title" type="text" placeholder="Enter book title" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Book Author</Form.Label>
                            <Form.Control onChange={this.changeHandler} id="authors" type="text" placeholder="Enter book author" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridSeries">
                            <Form.Label>Series</Form.Label>
                            <Form.Control onChange={this.changeHandler} id="series" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Book in series</Form.Label>
                            <Form.Control onChange={this.changeHandler} id="bookInSeries" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Rate</Form.Label>
                            <Form.Control onChange={this.changeHandler} id="rating" as="select" defaultValue={this.state.rating}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>


                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Read</Form.Label>
                            <Form.Control onChange={this.changeHandler} id="read" as="select" defaultValue="Choose...">
                                <option>Read</option>
                                <option>Reading</option>
                                <option>To read</option>

                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Generes</Form.Label>
                            <Form.Control onChange={this.changeHandler} id="generes" as="select" defaultValue="Choose...">
                                <option>Fantasy</option>
                                <option>Fiction</option>
                                <option>Romance</option>
                                <option>Si-fi</option>
                                <option>Horror</option>
                                <option>Triller</option>
                                <option>Drama</option>
                                <option>History</option>

                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Format</Form.Label>
                            <Form.Control onChange={this.changeHandler} id="format" as="select" defaultValue="Choose...">
                                <option>Hardcover</option>
                                <option>Audio book</option>
                                <option>E-book</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={this.changeHandler} id="description" as="textarea" rows="3" />
                    </Form.Group>

                    <Button onClick={this.addNewBook} variant="outline-secondary" type="submit">
                        Save book
  </Button>
                </div>
            </Form>
        )
    }
}

export default withRouter(AddBook);