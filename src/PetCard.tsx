import * as React from 'react';
import { Card, Button, Form } from "react-bootstrap";
import { PetV1 } from './model/petV1';
import { Modal } from 'react-bootstrap';

const defaultPic: string = "https://en.wikipedia.org/wiki/Dog#/media/File:Golden_retriever_eating_pigs_foot.jpg";

type PetCardProps = {
    pet: PetV1
}

type PetCardState = {
    showModal: boolean,
    pet: PetV1
}

export class PetCard extends React.Component<PetCardProps, PetCardState> {
    constructor(props: PetCardProps) {
        super(props);
        this.state = {
            showModal: false,
            pet: props.pet
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ showModal: false });
    }

    handleShow() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.pet.photos == null ? defaultPic : this.state.pet.photos[0]} />
                    <Card.Body>
                        <Card.Title>{this.state.pet.name}</Card.Title>
                        <Card.Text>{this.state.pet.description}</Card.Text>
                        <Button variant="primary" onClick={this.handleShow}>Adopt</Button>
                    </Card.Body>
                </Card>
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adopt {this.state.pet.name}</Modal.Title>
                    </Modal.Header>
                    <Form>
                    <Modal.Body>
                        Thanks for your interest in adopting {this.state.pet.name}!
                        Please fill out this form to submit an adoption enquiry.
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter your full name" />
                        </Form.Group>
                        <Form.Group controlId="inquiryForm">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit" onClick={this.handleClose}>
                            Submit inquiry
                        </Button>
                    </Modal.Footer>
                    </Form>
                </Modal>
            </>
        );
    }
}