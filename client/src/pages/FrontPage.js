// dependencies
import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid/Grid"
import Image from "../components/Image/Image"
import logoImg from "../images/leftRightMatch3.png"
import Nav from "../components/Nav/Nav"

class FrontPage extends Component {

    state = {
        transitioning: false
    }

    handleThisClick = () => {
        console.log('handleClick hit')
            // aimate do stuff
        this.setState({transitioning: true}, () => {

            setTimeout( () => this.props.history.push("/quiz"), 5000);
        })
    }

    render() {


        if (this.state.transitioning) {

        }
        return (
            
            <div>
                
                <Nav />
                <Container fluid>
                    <Row fluid>
                        <Col size="mx-auto">
                            <div onClick={this.handleThisClick}>
                                <Image
                                    image={logoImg}
                                    name={logoImg.name}
                                >
                                    {/* Need to position text closer to logo */}
                                    <h1>Which Political Candidate Are You Most Like?</h1>
                                </Image>
                            </div>
                        </Col>
                    </Row>
                </Container >
                <Zoom>
                    <p>Markup that be revealed on scroll</p>
                </Zoom>
            </div>
        );
    }
}

export default FrontPage;