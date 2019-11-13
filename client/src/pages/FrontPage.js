// dependencies
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Image from "../components/Image";
import logo from "../images/leftRightMatch3.png";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";

class FrontPage extends Component {

    render() {
        return (
            <Container fluid>
                <Nav />
                <Row fluid>
                    <Col size="mx-auto">
                        <Jumbotron>
                            <Image
                                image={logo}
                                width={"1000px"}
                                // height={"600px"}
                                name={logo.name}
                            />
                            {/* Need to position text closer to logo */}
                            <h1>Which Political Candidate Are You Most Like?</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                {/* <Row fluid>
                    <Col size="mx-auto">
                        <Logo
                            image={logo}
                            width={"1000px"}
                            // height={"600px"}
                            name={logo.name}
                        />
                        <h5>Which Political Candidate Are You Most Like?</h5>
                    </Col>
                </Row> */}
            </Container >
        );
    }
}

export default FrontPage;