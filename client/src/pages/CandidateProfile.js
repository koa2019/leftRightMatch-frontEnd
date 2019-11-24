// dependencies
import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid/Grid"
import Nav from "../components/Nav/Nav"
import ProfileCard from "../components/ProfileCard/ProfileCard"
// import candidateJSON from "../utils/candidates.json"
import "./pageStyles/CandidateProfile.css"
import API from "../utils/API"


class CandidateProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isReady: false,
            profileData: {},
            // profileData: candidateJSON[2]
        }
    }

    // function gets one candidate passed on their _id indatabase & renders their props+values to html page
    componentDidMount() {
        API.getCandidate(this.props.match.params.id)
            .then(res => this.setState({ profileData: res.data }))
            .catch(err => console.log(err));
    }   

    // need to make render wait for compontentDidMount to load 1st because
    // arrays passed to ProfileCard are undefined when trying to loop through them
    render() {
        console.log('render() state ', this.state.profileData)
        return (
            <div>
                <Nav />
                <div className="banner">
                    <img  className="banner-img" src={this.state.profileData.bannerImg} alt={this.state.profileData.name} />
                </div>

                <Container specs="hello">
                    <Row>
                        <Col size="col-md-auto mx-auto">
                            <ProfileCard
                                {...this.state.profileData}                                
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CandidateProfile;