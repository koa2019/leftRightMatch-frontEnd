// dependencies
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from '../components/Nav';
import Jumbotron from "../components/Jumbotron";
import ProfileCard from "../components/ProfileCard";
import candidateImages from "../utils/images.json";
import Bernie from '../images/bernie_blue_profile1.jpg'

class CandidateProfile extends Component {

    state = {
        loading: false,
        isProblem: false,
        // candidate,
        name: "",
        image: "",
        id: "",
        candidateImages,
        profileData: []
    }
    
    loadCandidateData() {
        this.setState({
            id: candidateImages[1].id,
            name: candidateImages[1].name,
            image: candidateImages[1].image
        })
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <Nav />
                <Jumbotron>
                    <h1><span className="bg-light p-3"> {this.state.name}</span></h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="col-md-auto mx-auto">
                            <ProfileCard
                                id={this.state.id}
                                image={Bernie}
                                name={this.state.name}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CandidateProfile;