// dependencies
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ProfileCard from "../components/ProfileCard";
import candidate from "../utils/questions.json";

class CandidateProfile extends Component {

    state = {
        loading: false,
        isProblem: false,
        candidate,
        name: "",
        image: "",
        profileData: []
    }

    setCandidateData() {
        this.setState({
            name: candidate.name,
            image: candidate.image
        })
        console.log(this.state)
    }
    
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>{this.state.name}[Candidate Name]</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="col-sm-12">
                            <ProfileCard 
                            image={this.state.candidate.image} 
                            name={this.state.candidate.name}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CandidateProfile;