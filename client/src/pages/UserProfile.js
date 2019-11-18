// dependencies
import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid/Grid"
import UProfileCard from "../components/UProfileCard/UProfileCard"
import Nav from "../components/Nav/Nav"

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            name: "[ Insert User's Name Here ]",
            image: ""
        }
    }

    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Row>
                        <Col size="col-md-12">
                            <UProfileCard
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