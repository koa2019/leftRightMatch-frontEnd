// dependencies
import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid"
import Nav from '../components/Nav'
import Jumbotron from "../components/Jumbotron"
import ProfileCard from "../components/ProfileCard"
import candidateData from "../components/candidates.json"
import Bernie from "../images/elizabeth-warren_red_profile.png"
import EWBanner from "../images/ElizabethWarren-banner4.png"
// import { List, ListItem } from "../components/List"
// import API from "../utils/API"


class CandidateProfile extends Component {

    state = {
        // candidate: {}
        candidate: candidateData

    }

    // When this component mounts, grab the candidate with the _id of this.props.match.params.id
    // e.g. localhost:3000/candidate/4123
    // componentDidMount() {
    //     API.getCandidate(this.props.match.params.id)
    //         .then(res => this.setState({ candidate: res.data }))
    //         .catch(err => console.log(err));
    // }

    render() {
        return (
            <div>
                <Nav />
                <Jumbotron>
                    {/* <img src={this.state.candidate[0].banner} alt={this.state.candidate[0].name} /> */}
                    <img className="banner" src={EWBanner} alt={this.state.candidate[0].name} />
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="col-md-auto mx-auto">
                            <ProfileCard
                                id={this.state.candidate[0].id}
                                image={Bernie}
                                name={this.state.candidate[0].name}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CandidateProfile;