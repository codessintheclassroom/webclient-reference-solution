import * as React from 'react';
import { Card, Button } from "react-bootstrap";

export const Dog = (props: {name : string, description: string}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"https://source.unsplash.com/collection/212527/200x200/?sig=" + Math.floor(Math.random() * 100)} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Button variant="primary">Adopt</Button>
        </Card.Body>
        </Card>
    );
}
