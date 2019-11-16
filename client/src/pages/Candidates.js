// dependencies
import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid/Grid"
import Nav from '../components/Nav/Nav'
import candidateData from "../utils/candidates.json"
import thumbnail from "../images/UnknownProfile.png"
import { List, ListItem } from "../components/List/List"
import "./pageStyles/Candidates.css"

// can this be function instead of a class?
class Candidates extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            image: "",
            id: "",
            candidateData,
            profileData: []
        }
    }

    loadCandidateData() {
        candidateData.map((candidate, i) => {
            return (
                this.setState({
                    id: candidate[i].id,
                    name: candidate[i].name,
                    image: candidate[i].image
                })
            )
        })
    }

    // function needs to capture candidate's id onClick, setState? & 
    // pass id to Router & redirect to "/candidates/:id" 
    // ? do I add onClick={this.handleOnClick} to definition of ListItem?
    handleOnClick = event => {
        const { name, value } = event.target;

        // expected id: value equal to candidates id in database
        this.setState({
            [name]: value
        });
    }


    render() {
        console.log('render() ', this.state)
        return (
            <div>
                <Nav />
                <div className="allCandidates">
                    <span>All Candidates</span>
                </div>
                <Container specs={"hello"}>
                    <Row>
                        <Col size="col-md-12">
                            <List>                          
                                {this.state.candidateData.map(candidate => {
                                    console.log(candidate)
                                    return (
                                        <ListItem
                                            key={candidate.name}
                                            id={candidate.id}
                                        >
                                            <ul className="list-unstyled">
                                                <img className="img-thumbnail float-left mr-4" src={thumbnail} width="100px" alt={candidate.name} />
                                                {/* <img src={candidate.image}  alt={candidate.name} /> */}
                                                <h2 className="font-weight-bold">
                                                    <li>{candidate.name}</li>
                                                </h2>
                                                <li>
                                                    <span className="font-weight-bold">Political Party: </span>
                                                    Democrat
                                                {/* {candidate.political-party}*/}
                                                    </li>
                                                <li>
                                                    <span className="font-weight-bold">Top Qualities: </span>
                                                    Honesty, Leadership, Charisma
                                                    {/* {candidate.top-qualities} */}
                                                    </li>
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