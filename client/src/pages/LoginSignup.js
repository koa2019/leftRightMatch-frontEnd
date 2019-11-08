// dependencies
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class LoginSignUp extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col size="">
                        <Jumbotron>
                            {/* renders message depending on  user's isLoggedIn state */}
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-12">
                        {/* renders login or signup form component depending on user's isLoggedIn state */}
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default LoginSignUp;