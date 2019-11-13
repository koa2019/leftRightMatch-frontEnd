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
            <Col size="col-12">
              <ul className="nav nav-tabs nav-justified navTab" id="myTab" role="tablist" tabIndex="0">
                <li className="nav-item navTabItems">
                  <h3>
                    <span role="button" onClick={Signup}>SignUp</span>
                  </h3>
                </li>
                <li className="nav-item navTabItems">
                  <h3>
                  <span role="button" onClick={Login}>Login</span>
                  </h3>
                </li>
              </ul>
            </Col>
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
