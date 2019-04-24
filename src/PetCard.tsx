import * as React from 'react';
import { Card, Button, Form, FormControl, Alert } from "react-bootstrap";
import { PetV1 } from './model/petV1';
import { Modal } from 'react-bootstrap';

const defaultPic: string = "https://en.wikipedia.org/wiki/Dog#/media/File:Golden_retriever_eating_pigs_foot.jpg";

type PetCardProps = {
    pet: PetV1
}

type PetCardState = {
    showModal: boolean,
    pet: PetV1,
    name: string,
    email: string,
    message: string,
    formState: string,
    inquiryId: string
}

export class PetCard extends React.Component<PetCardProps, PetCardState> {
    constructor(props: PetCardProps) {
        super(props);
        this.state = {
            showModal: false,
            pet: props.pet,
            name: "",
            email: "",
            message: "",
            formState: "undefined",
            inquiryId: ""
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.submitInquiry = this.submitInquiry.bind(this);
    }

    handleClose() {
        this.setState({ showModal: false });
    }

    handleShow() {
        this.setState({ showModal: true });
    }

    submitInquiry(event: any) {
        event.preventDefault();
        fetch(`https://codess-shelter.azurewebsites.net/api/v1/inquiries`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache", 
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(
                {
                    petId: this.state.pet.id,
                    name: this.state.name,
                    email: this.state.email,
                    message: this.state.message
                }), 
        }).then(response => {
            if (response.status !== 201) {
                console.log(response.json())
                this.setState({ formState: "error" });
                throw new Error(`HTTP Error ${response.statusText}`);
            }
            return response.json();
        }
        ).then(data => {
            //console.log(data);
            this.setState({
                inquiryId: (data as any).id,
                formState: "success"
            });
        })
    }

    render() {
        const { name, email, message } = this.state;
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
                            <Form.Group controlId="nameControlId">
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="Enter your full name"
                                    name="name"
                                    value={name}
                                    onChange={(e: React.FormEvent<FormControl>) => // XXX casting to unknown because of issues with react-bootstrap typing
                                        this.setState({ name: (e.currentTarget as unknown as HTMLFormElement).value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="emailControlId">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                    name="email"
                                    value={email}
                                    onChange={(e: React.FormEvent<FormControl>) => // XXX casting to unknown because of issues with react-bootstrap typing
                                        this.setState({ email: (e.currentTarget as unknown as HTMLFormElement).value })} />
                            </Form.Group>
                            <Form.Group controlId="messageControlId">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Enter your message"
                                    name="message"
                                    value={message}
                                    onChange={(e: React.FormEvent<FormControl>) => // XXX casting to unknown because of issues with react-bootstrap typing
                                        this.setState({ message: (e.currentTarget as unknown as HTMLFormElement).value })}
                                />
                            </Form.Group>
                            {
                                this.state.formState === "success" &&
                                <div>
                                    <Alert variant="success">
                                        Success! Your inquiry has been logged as id: {this.state.inquiryId}.
                                    </Alert>
                                </div>
                            }
                            {
                                this.state.formState === "error" &&
                                <div>
                                    <Alert variant="warning">
                                        There has been an error submitting your inquiry: sorry about that, please try again later.
                                    </Alert>
                                </div>
                            }
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit" onClick={this.submitInquiry}>
                                Submit inquiry
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        );
    }
}