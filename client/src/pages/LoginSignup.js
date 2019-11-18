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

// const bgColors = {
//   defaultColor: "var(--stylish-slight-grey)",
//   red: "var(--bright-tab)"
// }

class LoginSignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultColor: "var(--stylish-slight-grey)",
      red: "var(--bright-red)",
      bgColor: "",
      selectedTab: "login",
      selected: ""
    }
  }

  showLogin = () => {
    this.setState({
      selectedTab: "login",
      bgColors: this.state.red
    })
  }

  showSignUp = () => {
    this.setState({
      selectedTab: "signup",
      bgColors: this.state.defaultColor
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron>
          <h1>Which Political Candidate Are You Most Like?</h1>
        </Jumbotron>
        <Container>
          <Col size="col mx-auto">
            <Row>
              <Col size="col mx-auto">

                <ul className="nav nav-justified" id="myTab" role="tablist" >

                  {/* <li className="nav-item navTabItems" style={{ width: '100%', backgroundColor: this.state.bgColor }}> */}
                  <li className="nav-item navTabItems">
                    <h3 onClick={this.showLogin}>
                      <span role="button">Login</span>
                    </h3>
                  </li>
                  <li className="nav-item navTabItems">
                    <h3 onClick={this.showSignUp}>
                      <span role="button">SignUp</span>
                    </h3>
                  </li>
                </ul>
              </Col>
            </Row>

            {/* Login & SignUp Forms */}
            <Row>
              <Col size="col mx-auto LSForm">
                {this.state.selectedTab === "login" ? <Login /> : <SignUp />}
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    );
  }
}

export default LoginSignUp;
