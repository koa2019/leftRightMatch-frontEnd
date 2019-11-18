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

const activeColors = {
  bgColor: "var(--bootstrap-primary-blue)",
  textColor: "var(--lighter-gray)"
}
const disabledColors = {
  bgColor: "var(--stylish-slight-grey)",
  textColor: "var(--dark-gray)",
}

class LoginSignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // active: activeColors,
      // disabled: disabledColors,
      bgColor: activeColors.bgColor,
      selectedTab: "login",
      selected: "true",
      notSelected: "false"

    }
  }

  showActive = () => {
    this.setState({
      // selectedTab: "",
      selected: "true",
      notSelected: "true",
      bgColor: this.state.active
      // bgColors: this.active.activeColors.bgColor,
      // textColor: this.active.activeColors.textColor
    })
  }

  showDisabled = () => {
    this.setState({
      // selectedTab: "signup"
      selected: "false",
      notSelected: "false",
      bgColor: this.state.disabled
      // bgColors: this.disabled.disabledColors.bgColor,
      // textColor: this.disabled.disabledColors.textColor
    })
  }

  handleChange = event => {
    console.log(event.target.attributes.getNamedItem('data-value').value)
    const target = event.target.value;
    this.setState({ 
      selectedTab: target,
      selected: "true"
    })
  }


  render() {
    console.log('render() state======= ', this.state)

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

                  <li className="nav-item navTabItems" style={{ backgroundColor: this.state.bgColor }}>
                    {/* <li className="nav-item navTabItems" style={{ backgroundColor: bgColors.activeBgColor }}> */}

                      {/* <h3 data-value="login" onClick={this.showActive}> */}
                    {/* <h3 data-value={"login"} onClick={this.handleChange} > */}
                      <h3 onClick={() => this.setState({ selectedTab: "login", selected: "true" })}>

                      <span role="button">Login</span>
                    </h3>
                  </li>

                  <li className="nav-item navTabItems" style={{ backgroundColor: this.state.bgColor }}>

                      {/* <h3 data-value={"singup"} onClick={this.showDisabled}> */}
                    {/* <h3 data-value={"signup"} onClick={this.handleChange} > */}
                      <h3 onClick={() => this.setState({ selectedTab: "signup", selected: "true" })}>

                      <span role="button">SignUp</span>
                    </h3>
                  </li>
                </ul>
              </Col>
            </Row>

            {/* Login & SignUp Forms */}
            <Row>
              <Col size="col mx-auto LSForm">

                {/* Ternary: if selected is equal to true, then call this function; else call this function */}
                {this.state.selected === "true" ? this.showActive : this.showDisabled}

                {/* Ternary: if seletedTab is equal to login, then call this compntnt; else call this compntnt */}
                {this.state.selectedTab === "login" ? <Login /> : <SignUp />}
                {/* {this.state.selected === "true" ? <Login /> : <SignUp />} */}
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    );
  }
}

export default LoginSignUp;
