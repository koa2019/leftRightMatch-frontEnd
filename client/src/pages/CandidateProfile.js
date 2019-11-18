// dependencies
import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid/Grid"
import Nav from "../components/Nav/Nav"
import ProfileCard from "../components/ProfileCard/ProfileCard"
import candidateData from "../utils/candidates.json"
import Img from "../images/bernie_blue_profile1.jpg"
import EWBanner from "../images/bernie-banner1.png"
import "./pageStyles/CandidateProfile.css"
import API from "../utils/API"
// import SocialMedia from "../components/SocialMedia/SocialMedia"
// import API from "../utils/API"


class CandidateProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allCandidates: [],
            candidate: [],
            id: "",
            parties: "",
            img: "",
            banner: "",
            qualities: "",
            experiences: "",
            themes: "",
            websites: "",
            iSideLink: "",
            policies: "",
            twitters: "",
            facebooks: "",
            instagrams: ""
        }
    }

    // function gets all candidates from database & renders them to html page
    getCandidate = () => {
        // grab candidate _id from params & request their profile data from db
        // .get returs candidate profile data & renders CandidateProfile.js
        API.getCandidate(this.props.match.params.id)
            .then(res => this.setState({ profileData: res.data }))
            .catch(err => console.log(err));
      
    }

    // looks horribly ugly. Must be more effiecient way of setting their states
    componentDidMount() {
        this.setState({
            candidate: candidateData[1],
            id: candidateData[1].id,
            parties: candidateData[1].parties,
            img: candidateData[1].img,
            banner: candidateData[1].bannerImg,
            qualities: candidateData[1].qualities,
            experiences: candidateData[1].experiences,
            themes: candidateData[1].themes,
            websites: candidateData[1].contactInfo.websites,
            iSideLink: candidateData[1].iSideLink,
            policies: candidateData[1].policies,
            twitters: candidateData[1].twitters,
            facebooks: candidateData[1].facebooks,
            instagrams: candidateData[1].instagrams

        })
    }

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
                                img={Img}
                                name={this.state.candidate.name}
                                parties={this.state.parties}
                                qualities={this.state.qualities}
                                experiences={this.state.experiences}
                                themes={this.state.themes}
                                websites={this.state.websites}
                                iSideLink={this.state.iSideLink}
                                policies={this.state.policies}
                                twitters={this.state.twitters}
                                facebooks={this.state.facebooks}
                                instagrams={this.state.instagrams}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CandidateProfile;