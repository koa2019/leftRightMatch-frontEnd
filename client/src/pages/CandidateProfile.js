// dependencies
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ProfileCard from "../components/ProfileCard";
// import candidate from "../utils/questions.json";
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
    componentDidMount(){
            this.setState({
                id: candidateImages[4].id,
                name: candidateImages[4].name,
                image: candidateImages[4].image
            })
            console.log(this.state)
    

    }
  
    
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1><span className="bg-light p-3"> {this.state.name}</span></h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="col-sm-12">
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