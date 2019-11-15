// dependencies
import React, { Component } from "react"
import Nav from '../components/Nav'
import Jumbotron from "../components/Jumbotron"
import { Col, Row, Container } from "../components/Grid"
import Login from "../components/Login/Login"
import SignUp from "../components/Signup/SignUp"
// import SignUpTab from "../components/SignUpTab/SignUpTab"
// import LoginTab from "../components/LoginTab/LoginTab"
import "./pageStyles/LoginSignUp.css"

class LoginSignUp extends Component {
  state = {
    selectedTab: "login",
    color: "var(--stylish-slight-grey)",
    selected: "(157, 255, 0)"
  }
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron>
          <h1>Which Political Candidate Are You Most Like?</h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="col-sm-12 mx-auto">

              <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist" >

                {/* <li className="nav-item navTabItems selected" style={{ background-color:"{this.state.selected}" }}> */}
                <li className="nav-item navTabItems selected">
                  <h3 onClick={() => this.setState({selectedTab: 'login'})}>
                  <span role="button">Login</span>
                  </h3>
                </li>
                <li className="nav-item navTabItems">
                  <h3 onClick={() => this.setState({selectedTab: 'signup'})}>
                    <span role="button">SignUp</span>
                  </h3>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col size="col-md-6 mx-auto">
              {this.state.selectedTab === "login" ? <Login /> : <SignUp />}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginSignUp;
