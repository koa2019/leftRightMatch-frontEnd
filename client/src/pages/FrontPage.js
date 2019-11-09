// dependencies
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Logo from "../components/Logo";
import image from "../images/leftRightMatch3.png";
import Jumbotron from "../components/Jumbotron";

class FrontPage extends Component {

    render() {
        return (
            <Container fluid>
                <Row fluid><Jumbotron>
                    <h1>Which Political Candidate Are You Most Like?</h1>
                </Jumbotron></Row>
                <Row>
                    <Col size="mx-auto">
                        <Logo
                            logo={image}
                            width={"1000"}
                            height={"600"}
                            name={image.name}
                        >
                            <h5>Which Candidate Are You Most Like?</h5>                        
                            </Logo>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default FrontPage;