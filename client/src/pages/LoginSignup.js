// dependencies
import React, { Component } from "react"
import Nav from "../components/Nav/Nav"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import { Col, Row, Container } from "../components/Grid/Grid"
import Login from "../components/Login/Login"
import SignUp from "../components/Signup/SignUp"
import "./pageStyles/LoginSignUp.css"
// import SignUpTab from "../components/SignUpTab/SignUpTab"
// import LoginTab from "../components/LoginTab/LoginTab"

class LoginSignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
    selectedTab: "login",
    defaultColor: "var(--stylish-slight-grey)",
    red: "(157, 255, 0)",
    selected: ""
  }
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
