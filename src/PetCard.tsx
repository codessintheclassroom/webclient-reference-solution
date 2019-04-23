import * as React from 'react';
import { Card, Button } from "react-bootstrap";
import { PetV1 } from './model/petV1';

const defaultPic = "https://en.wikipedia.org/wiki/Dog#/media/File:Golden_retriever_eating_pigs_foot.jpg";

export const PetCard = (props: { pet: PetV1 }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.pet.photos == null ? defaultPic : props.pet.photos[0]} />
            <Card.Body>
                <Card.Title>{props.pet.name}</Card.Title>
                <Card.Text>{props.pet.description}</Card.Text>
                <Button variant="primary">Adopt</Button>
            </Card.Body>
        </Card>
    );
}
