// dependencies
import React, { Component } from "react"
import Nav from '../components/Nav';
import Jumbotron from "../components/Jumbotron"
import { Col, Row, Container } from "../components/Grid"
import Login from "../components/Login/index"
import Signup from "../components/Signup/index"

class LoginSignUp extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Jumbotron>
          <h1>Which Political Candidate Are You Most Like?</h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="col-sm-6">
              <Login />
            </Col>
            <Col size="col-sm-6">
              <Signup />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginSignUp;
