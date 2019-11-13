// dependencies
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import ProfileCard from "../components/ProfileCard";
import Nav from '../components/Nav'

class UserProfile extends Component {

    state= {
        id: "",
        name:"[ Insert User's Name Here ]",
        image:""
    }

    
    render() {
        return (

            <div>
                <Nav />
            <Container>
                <Row>
                    <Col size="col-md-12">
                       <ProfileCard 
                       name={this.state.name}
                       />
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default UserProfile;