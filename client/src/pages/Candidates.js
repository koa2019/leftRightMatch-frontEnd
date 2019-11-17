// dependencies
import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid/Grid"
import Nav from '../components/Nav/Nav'
import candidateData from "../utils/candidates.json"
import thumbnail from "../images/UnknownProfile.png"
import { List, ListItem } from "../components/List/List"
import "./pageStyles/Candidates.css"
import banner from "../images/primaries_DEM_JULY.14.jpg"

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

    // function captures onClick prop name & value dynamically & setStates
    // if prop doesn't exist in state then it will create it in state 
    handleThisClick = event => {
        console.log('handleClick hit')

        const { name, value } = event.target;
        console.log('[name]: value = ', name, value)

        // getNamedItem('data-value').value
        // expected id: value equal to candidates id in database
        // this.setState({
        //     [name]: value
        // });
    }


    render() {
        console.log('render() ', this.state)
        return (
            <div>
                <Nav />
                {/* <div className="candidatesBanner">
                <img className="banner-img" src={banner} alt={'2020-candidates'} />
                    <br /><span>All Candidates</span>
                </div> */}
                <Container>
                    <Row>
                        <Col size="col-md-12 mx-auto">
                            <div className="candidatesBanner">
                                <img className="banner-image" src={banner} alt={'2020-candidates'} />
                                <br /><span>All Candidates</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="col-md-12 hello">
                            <div onClick={this.handleThisClick}>
                                <List>
                                    {this.state.candidateData.map(candidate => {
                                        // console.log(candidate)
                                        return (
                                            <ListItem
                                                key={candidate.name}
                                                id={candidate.id}
                                            >
                                                <ul className="list-unstyled">
                                                    <img className="img-thumbnail float-left mr-4" src={thumbnail} width="100px" alt={candidate.name} />
                                                    {/* <img src={candidateImage}  alt={candidate.name} /> */}
                                                    <h2 className="font-weight-bold">
                                                        <li>{candidate.name}</li>
                                                    </h2>
                                                    <li>
                                                        <span className="font-weight-bold">Political Party: </span>
                                                        Democrat
                                                {/* {candidate.politicalParty}*/}
                                                    </li>
                                                    <li>
                                                        <span className="font-weight-bold">Top Qualities: </span>
                                                        Honesty, Leadership, Charisma
                                                    {/* {candidate.topQualities} */}
                                                    </li>
                                                </ul>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Candidates;