import './App.css';

import * as React from 'react';
import { Button, CardColumns, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';

import { Dog } from './Dog';

// TODO replace this with actual data fetched from backend
var mockedPets = [
  { name: "Fido", description: "Barks a lot at night" },
  { name: "Brandy", description: "Enjoys long strolls on the beach" },
  { name: "Priscilla", description: "Fussy but very well behaved" },
  { name: "Berty", description: "Has a good nose for truffles" },
  { name: "Argo", description: "A superhero (in dogs' world)" },
  { name: "Fred", description: "He has opinions about sausages" },
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Pet Shelter</Navbar.Brand>
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
                {mockedPets.map((pet) => {
                  // key prop is required, see: https://reactjs.org/docs/lists-and-keys.html#keys
                  return <Dog key={pet.name} name={pet.name} description={pet.description} />
                })}
              </CardColumns>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;