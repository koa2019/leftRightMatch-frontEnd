// dependencies
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ProfileCard from "../components/ProfileCard";

class UserProfile extends Component {

    render() {
        return (

            <Container>
                <Jumbotron>
                    <h1>Left Right Match</h1>
                </Jumbotron>
                <Row>
                    <Col size="col-md-12">
                       <ProfileCard />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UserProfile;