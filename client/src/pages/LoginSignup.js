// dependencies
import React, { Component } from "react"
import Nav from '../components/Nav';
import Jumbotron from "../components/Jumbotron"
import { Col, Row, Container } from "../components/Grid"
import Login from "../components/Login/index"
import Signup from "../components/Signup/index"

class LoginSignUp extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron>
          <h1>Which Political Candidate Are You Most Like?</h1>
        </Jumbotron>
        <Container>
          <Row>
            <ul className="nav nav-tabs navTabItem">
              <li className="nav-item navTabItem">
                <button className="nav-link" onClick={Signup}>SignUp</button>
              </li>
              <li className="nav-item navTabItem">
                <button className="nav-link" onClick={Login}>Login</button>
              </li>
            </ul>
          </Row>

          <Row>
            <Col size="col-md-6 mx-auto">
              <Signup />
              <Login />
            </Col>
          </Row>

          {/* <Row>
              <Col size="col-md-6 mx-auto">
              <Signup />
            </Col>
            <Col size="col-md-6 mx-auto">
              <Login />
            </Col>
          </Row> */}

        </Container>
      </div>
    );
  }
}

export default LoginSignUp;
