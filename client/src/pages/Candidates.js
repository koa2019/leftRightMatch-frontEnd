// dependencies
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from '../components/Nav';
import Jumbotron from "../components/Jumbotron";
import candidatesDetails from "../utils/images.json";
import thumbnail from "../images/UnknownProfile.png"
import { List, ListItem } from "../components/List";

// can this be function instead of a class?
class Candidates extends Component {

    state = {
        name: "",
        image: "",
        id: "",
        candidatesDetails,
        profileData: []
    }

    loadCandidateData() {
        candidatesDetails.map((candidate, i) => {
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
                All Candidates
                    {/* <span className="bg-light p-3"> All Candidates</span> */}
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="col-md-12">
                            <List>
                                {this.state.candidatesDetails.map(candidate => {
                                    return (
                                        <ListItem
                                            key={candidate.name}
                                            id={candidate.id}
                                        >
                                            
                                            <ul className="list-unstyled">
                                            <img className="img-thumbnail img-fluid float-left" src={thumbnail} width="100px" alt={candidate.name} />
                                            {/* <img src={candidate.image} height="100px" alt={candidate.name} /> */}
                                            <li>{candidate.name}</li>
                                            <li>Political Party: Democrat</li>
                                            </ul>
                                            
                                           
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Candidates;