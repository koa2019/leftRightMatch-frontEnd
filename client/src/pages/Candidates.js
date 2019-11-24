// dependencies
import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid/Grid"
import Nav from '../components/Nav/Nav'
import { List, ListItem } from "../components/List/List"
import API from "../utils/API"
import banner from "../images/primaries_DEM_JULY.14.jpg"
import "./pageStyles/Candidates.css"

// can this be function instead of a class?
class Candidates extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            isProblem: false,
            name: "",
            image: "",
            id: "",
            allCandidates: {},
            profileData: {}
        }
    }

    componentDidMount() {
        this.loadCandidates();
    }

    loadCandidates() {

        // initializes compntnt by setting its state & calling a func that makes a call to the database
        this.setState({ loading: true, isProblem: false }, () => {

            // axios get passes this state which is an empty {}
            API.getAllCandidates()

                // it returns an array of json objects props & values from database
                // sets state.loading to false because promise was success & data receieved 
                .then(res => {
                    this.setState({ allCandidates: res.data, loading: false });
                })

                // error handling
                .catch(err => {
                    console.log("Error at getAllCandidates ", err)
                    this.setState({ loading: false, isProblem: true });
                })
        })
    }

    // function captures onClick prop name & value dynamically & setStates
    // if prop doesn't exist in state then it will create it in state 
    handleThisClick = event => {
        // console.log('handleClick hit')

        // Get the data-value of the clicked candidate
        // expected id: value equal to candidates id in database
        const target = event.target.attributes.getNamedItem('data-id').value;
        console.log('data-id=', target)

        // set state with clicked candidates id & then redirect to their profile
        this.setState({ selectedId: target }, () => {
            this.props.history.push("candidates/" + this.state.selectedId)
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

                            {!this.state.allCandidates.length ? (
                                <h2> Loading...</h2>
                            ) : (

                                    <div onClick={this.handleThisClick} >

                                        <List>
                                            {this.state.allCandidates.map(candidate => {

                                                return (

                                                    // 1 ListItem per candidate
                                                    <ListItem
                                                        key={candidate.name}
                                                        id={candidate._id}
                                                    >
                                                        <ul className="list-unstyled" data-id={candidate._id}>

                                                            <img src={candidate.img} className="img-thumbnail float-left mr-4" width="100px" alt={candidate.name} data-id={candidate._id} />

                                                            <h2 data-id={candidate._id} className="font-weight-bold">
                                                                <li data-id={candidate._id}>{candidate.name}</li>
                                                            </h2>

                                                            <li data-id={candidate._id}>
                                                                <span data-id={candidate._id} className="font-weight-bold">Political parties: </span>

                                                                {/* mapped because no whitespace between each index values */}
                                                                {candidate.parties.map(party => {
                                                                    return party + ", "
                                                                })}
                                                            </li>

                                                            <li data-id={candidate._id}>
                                                                <span data-id={candidate._id} className="font-weight-bold">Top Qualities: </span>
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

                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Candidates;