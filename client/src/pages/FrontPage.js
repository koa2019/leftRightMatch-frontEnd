// dependencies
import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid/Grid"
import Image from "../components/Image/Image"
import logoImg from "../images/leftRightMatch3.png"
import Nav from "../components/Nav/Nav"

class FrontPage extends Component {

    handleThisClick = () => {
        console.log('handleClick')
    }

    render() {
        return (
            <Container fluid>
                <Nav />
                <Row fluid>
                    <Col size="mx-auto">
                        {/* <div > */}
                            <Image
                                image={logoImg}
                                name={logoImg.name}
                            // onClick={()=>handleThisClick()}
                            >
                            {/* Need to position text closer to logo */}
                            <h1>Which Political Candidate Are You Most Like?</h1>
                            </Image>
                        {/* </div> */}
                    </Col>
                </Row>               
            </Container >
        );
    }
}

export default FrontPage;