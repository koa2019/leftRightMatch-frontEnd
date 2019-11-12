// dependencies
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from '../components/Nav';
import Jumbotron from "../components/Jumbotron";
// import ProfileCard from "../components/ProfileCard";
import candidateImages from "../utils/images.json";
// import Bernie from '../images/bernie_blue_profile1.jpg'
import { List, ListItem } from "../components/List";

class CandidateProfile extends Component {

    state = {
        // candidate,
        name: "",
        image: "",
        id: "",
        candidateImages,
        profileData: []
    }

    loadCandidateData() {
        candidateImages.map((candidate, i) => {
            return (
                this.setState({
                    id: candidate[i].id,
                    name: candidate[i].name,
                    image: candidate[i].image
                })
            )
        })
        
    }


    render() {
        return (
            <div>
                <Nav />
                <Jumbotron>
                    <h1><span className="bg-light p-3"> All Candidates</span></h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="col-md-12">
                            {this.state.candidateImages.map(candidate => {
                                return (
                                    <List>
                                        <ListItem
                                            id={candidate.id}
                                        >
                                        {candidate.name}
                                        </ListItem>
                                    </List>
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </div>
            // code for an individual candidate
            //      <div>
            //      <Nav />
            //      <Jumbotron>
            //          <h1><span className="bg-light p-3"> {this.state.name}</span></h1>
            //      </Jumbotron>
            //      <Container>
            //          <Row>
            //              <Col size="col-md-auto mx-auto">
            //                  <ProfileCard
            //                      id={this.state.id}
            //                      image={Bernie}
            //                      name={this.state.name}
            //                  />
            //              </Col>
            //          </Row>
            //      </Container>
            //  </div>
        );
    }
}

export default CandidateProfile;