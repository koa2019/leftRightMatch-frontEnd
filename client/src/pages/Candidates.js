// dependencies
import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid/Grid"
import Nav from '../components/Nav/Nav'
import candidateData from "../utils/candidates.json"
import thumbnail from "../images/UnknownProfile.png"
import { List, ListItem } from "../components/List/List"
import "./pageStyles/Candidates.css"
import banner from "../images/primaries_DEM_JULY.14.jpg"
import API from "../utils/API"

// can this be function instead of a class?
class Candidates extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            image: "",
            id: "",
            candidateData,
            allCandidates: [],
            profileData: {}
        }
    }

    // test API call when database is connected
    getAllCandidates = () => {
        API.getAllCandidates()
            .then(res => this.setState({

                // ask about setState id:""...
                allCandidates: res.data, id: "", name: "", img: ""
            })
                .catch(err => {
                    console.log("Error at getAllCandidates ", err)
                    res.sendStatus(500)
                })
            )
    }


    // function thats working off static json
    loadCandidateData() {
        candidateData.map((candidate, i) => {
            return (
                this.setState({
                    id: candidate[i].id,
                    name: candidate[i].name,
                    img: candidate[i].img
                })
            )
        })
    }

    // function captures onClick prop name & value dynamically & setStates
    // if prop doesn't exist in state then it will create it in state 
    handleThisClick = event => {
        console.log('handleClick hit')

        // Get the data-value of the clicked candidate
        // expected id: value equal to candidates id in database
        const target = event.target.attributes.getNamedItem('data-id').value;
        console.log('data-id=', target)

        this.setState({ selectedId: target })

        this.getCandidateById();
        // API.getCandidate(this.state.selectedId)
        // // .then(res => this.setState({ profileData: res.data }))
        // // .catch(err => console.log(err));
    }

    // uncomment then & catch after db connected
    getCandidateById = () => {

        console.log("getCandById selectedId= ", this.state.selectedId)
        // grab candidate id & request their profile data from db
        // .get returns candidate profile data & renders CandidateProfile.js
        API.getCandidate(this.state.selectedId)
            .then(res => this.setState({ profileData: res.data })
                // this.props.history.push("/candidates/ + res.data._id")
            )
            .catch(err => {
                console.log(err)
                // redirect to NoMatch page
                this.props.history.push("/NoMatch")
            })
    }


    render() {
        console.log('render() ', this.state)
        return (
            <div>
                <Nav />
                <Row fluid>
                    <Col size="mx-auto">
                        <div className="candidatesBanner">
                            <img className="banner-image" src={banner} alt={'2020-candidates'} />
                            <br />
                            <span>All Candidates</span>
                        </div>
                    </Col>
                </Row>
                <Container>

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
                                                <ul className="list-unstyled" data-id={candidate.id}>

                                                    <img src={thumbnail} className="img-thumbnail float-left mr-4" width="100px" alt={candidate.name} data-id={candidate.id} />
                                                    {/* <img src={candidate.img} className="img-thumbnail float-left mr-4"  width="100px" alt={candidate.name} /> */}

                                                    <h2 data-id={candidate.id} className="font-weight-bold">
                                                        <li data-id={candidate.id}>{candidate.name}</li>
                                                    </h2>

                                                    <li data-id={candidate.id}>
                                                        <span data-id={candidate.id} className="font-weight-bold">Political parties: </span>
                                                        {/* {candidate.parties} */}
                                                        {candidate.parties.map(party => {
                                                            return party + ", "
                                                        })}
                                                    </li>

                                                    <li data-id={candidate.id}>
                                                        <span data-id={candidate.id} className="font-weight-bold">Top Qualities: </span>
                                                        {/* {candidate.qualities} */}
                                                        {candidate.qualities.map(quality => {
                                                            return quality + ", "
                                                        })}
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