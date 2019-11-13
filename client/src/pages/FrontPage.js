// dependencies
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Logo from "../components/Logo";
import image from "../images/leftRightMatch3.png";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";

class FrontPage extends Component {

    render() {
        return (
            <Container fluid>
                <Nav />
                <Row fluid>
                    <Jumbotron>
                        <h1>Which Political Candidate Are You Most Like?</h1>
                    </Jumbotron>
                </Row>
                <Row fluid>
                    <Col size="mx-auto">
                        <Logo
                            image={image}
                            width={"1000px"}
                            height={"600px"}
                            name={image.name}
                        />
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default FrontPage;