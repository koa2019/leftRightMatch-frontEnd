// dependencies
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Logo from "../components/Logo";
import image from "../images/leftRightMatch3.png";

class FrontPage extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="mx-auto">
                        <Logo
                            logo={image}
                            width={"1000"}
                            height={"600"}
                        >
                            <h5>Which Politican Are you Most Like?</h5>
                        </Logo>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default FrontPage;