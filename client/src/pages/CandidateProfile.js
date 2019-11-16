// dependencies
import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid/Grid"
import Nav from "../components/Nav/Nav"
import ProfileCard from "../components/ProfileCard/ProfileCard"
import candidateData from "../utils/candidates.json"
import Img from "../images/bernie_blue_profile1.jpg"
import EWBanner from "../images/bernie-banner1.png"
import "./pageStyles/CandidateProfile.css"
// import { List, ListItem } from "../components/List"
// import SocialMedia from "../components/SocialMedia/SocialMedia"
// import API from "../utils/API"


class CandidateProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            candidataId: "",
            candidate: "",
            party: "",
            image: "",
            banner: "",
            qualities: "",
            experience: "",
            themes: "",
            website:"",
            iSide: "",
            policies: ""
        }
    }
    
    componentDidMount() {
        this.setState({
            candidate: candidateData[1],
            candidataId: candidateData[1].id,
            party: candidateData[1].politicalParty,
            qualities: candidateData[1].qualities,
            experience: candidateData[1].experience,
            themes:  candidateData[1].themes,
            website:candidateData[1].contactInfo[0].website,
            iSide: candidateData[1].iSideLink,
            policies: candidateData[1].policyLink
            
        })
    }
    // When this component mounts, grab the candidate with the _id of this.props.match.params.id
    // e.g. localhost:3000/candidate/4123
    // componentDidMount() {
    //     API.getCandidate(this.props.match.params.id)
    //         .then(res => this.setState({ candidate: res.data }))
    //         .catch(err => console.log(err));
    // }

    render() {
        // console.log('candidataData ', candidateData)
        console.log('render() state ', this.state.candidate)
        return (
            <div>
                <Nav />
                <div className="banner">
                    {/* <img  src={this.state.candidate.banner} alt={this.state.candidate.name} /> */}
                    <img className="banner-img" src={EWBanner} style={{ width: '100%' }} alt={this.state.candidate.name} />

                </div>
                <Container specs="hello">
                    <Row>
                        <Col size="col-md-auto mx-auto">
                            <ProfileCard
                                id={this.state.candidate.id}
                                image={Img}
                                name={this.state.candidate.name}
                                party={this.state.party}
                                qualities={this.state.qualities}
                                experience={this.state.experience}
                                themes={this.state.themes}
                                website={this.state.website}
                                iSide={this.state.iSide}
                                policies={this.state.policies}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CandidateProfile;