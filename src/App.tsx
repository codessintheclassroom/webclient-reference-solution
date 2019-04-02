import './App.css';

import { Button, Card, CardColumns, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import React, { Component } from 'react';

import logo from './logo.svg';

class App extends Component {
  render() {
    const card = 
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Vorderkoerpertiefstellung_THWZ.jpg" />
        <Card.Body>
          <Card.Title>Fido</Card.Title>
          <Card.Text>
            Fido likes long walks on the beach, and fetching sticks.
          </Card.Text>
          <Button variant="primary">Adopt Fido</Button>
        </Card.Body>
      </Card>

    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">adopt-a-pet.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <CardColumns>
                {card}
                {card}
                {card}
                {card}
                {card}
                {card}
              </CardColumns>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
