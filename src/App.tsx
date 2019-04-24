import './App.css';

import * as React from 'react';

import { CardColumns, Col, Container, Row } from 'react-bootstrap';

import { PetCard } from './PetCard';
import { PetV1 } from './model/petV1';


class App extends React.Component {

  state = {
    pets: []
  }

  componentDidMount() {
    // mocked API: http://private-f4006-codessintheclassroomshelter.apiary-mock.com/api/v1/pets
    fetch(`https://codess-shelter.azurewebsites.net/api/v1/pets`)
      .then(response => {
        if (response.status >= 300) {
          throw new Error(`HTTP Error ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        this.setState({ pets: data });
      });
  }

  render() {
    return (
      <div className="App">
      <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Pet Shelter</h1>
        <p className="lead">Welcome to our pet shelter! <br /> 
        We have plenty of furry friends that await your love and care.</p>
      </div>
        <Container>
          <Row>
            <Col>
              <CardColumns>
                {
                  this.state.pets.map((pet: PetV1) => {
                    return (
                      <PetCard key={pet.id} pet={pet} />
                    );
                  })
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
