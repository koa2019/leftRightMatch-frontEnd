// dependencies
import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid/Grid"
import Nav from "../components/Nav/Nav"
import ProfileCard from "../components/ProfileCard/ProfileCard"
import candidateData from "../utils/candidates.json"
import EWImg from "../images/elizabeth-warren_red_profile.png"
import EWBanner from "../images/ElizabethWarren-banner4.png"
import "./pageStyles/CandidateProfile.css"
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
                <div className="banner">
                    {/* <img  src={this.state.candidate[0].banner} alt={this.state.candidate[0].name} /> */}
                    <img className="banner-img" src={EWBanner} style={{ width: '100%' }} alt={this.state.candidate[0].name} />

                </div>
                <Container>
                    <Row>
                        <Col size="col-md-auto mx-auto">
                            <ProfileCard
                                id={this.state.candidate[0].id}
                                image={EWImg}
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