import './App.css';

import * as React from 'react';

import { CardColumns, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

import { Pet } from './Pet';
import { PetV1 } from './model/petV1';


class App extends React.Component {

  state = {
    pets: []
  }

  componentDidMount() {
    fetch(`http://private-f4006-codessintheclassroomshelter.apiary-mock.com/api/v1/pets`)
      .then(response => {
        if (response.status >= 300) {
          throw new Error(`HTTP Error ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        let retrievedPets = data.map((pet: PetV1) => {
          return (
            <Pet key={pet.id} name={pet.name} description={pet.description === undefined ? "" : pet.description} />
          );
        });
        this.setState({ pets: retrievedPets });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Pet Shelter</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <CardColumns>
                {
                  this.state.pets
                }
              </CardColumns>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
