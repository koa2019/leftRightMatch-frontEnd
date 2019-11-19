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

const selected='nav-item navTabItems selected';
const notSelected='nav-item navTabItems not-selected'

class LoginSignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "login",
      selectedClass: selected,
      notSelectedClass: notSelected
      // active: "true",
      // notActive: "false",
    }
  }

  showSelected = () => {
    this.setState({
      // selectedTab: "",
      selected: "true",
      notSelected: "true"
    })
  }

  showNotSelected = () => {
    this.setState({
      // selectedTab: "signup"
      selected: "false",
      notSelected: "false"
    })
  }

  handleChange = event => {
    // console.log(event.target.attributes.getNamedItem('data-value').value)
    // const target = event.target.value;

    this.setState({
      selectedTab: "login", 
      selectedClass: selected , 
      notSelectedClass: notSelected
    })
    this.setState({ 
      selectedTab: "signup", 
      selectedClass: notSelected , 
      notSelectedClass: selected})


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

                  <li className={this.state.selectedClass} >
                   
                    {/* <h3 data-value={"login"} onClick={this.handleChange} > */}
                    <h3 onClick={() => this.setState({ selectedTab: "login", selectedClass: selected , notSelectedClass: notSelected})}>

                      <span role="button">Login</span>
                    </h3>
                  </li>

                  <li className={this.state.notSelectedClass} >

                    {/* <h3 data-value={"signup"} onClick={this.handleChange} > */}
                    <h3 onClick={() => this.setState({ selectedTab: "signup", selectedClass: notSelected , notSelectedClass: selected})}>
                      <span role="button">SignUp</span>
                    </h3>
                  </li>
                </ul>
              </Col>
            </Row>

            {/* render Login & SignUp Forms here */}
            <Row>
              <Col size="col mx-auto LSForm">

                {/* Ternary: if seletedTab is equal to login, then call this compntnt; else call this compntnt */}
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
