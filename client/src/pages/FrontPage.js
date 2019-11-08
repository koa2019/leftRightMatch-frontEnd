// dependencies
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

class FrontPage extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-12">
                        <div className="logo" />
                        <h1>
                            Which Politican Are You Most Like?
                        </h1>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default FrontPage;