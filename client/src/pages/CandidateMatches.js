import React, { Component } from "react"
import { Col, Row, Container } from "../components/Grid/Grid"
import Nav from "../components/Nav/Nav"
import { Results, ResultsItems } from "../components/Results/Results"
import headImg from "../images/joe-biden-cutout.png"
import images from "../utils/images.json"
import allCandidates from "../utils/candidates.json"
import API from "../utils/API";
import "./pageStyles/CandidateMatches.css"

class CandidateMatches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isProblem: false,
            allCandidates,
            show: "false",
            key: "",
            name: "",
            completed: "false"

        }
    }
    componentDidMount() {
        this.showResults();
        this.getCandidateMatch()
    }
    getCandidateMatch = () => {
        this.setState({ completed: true })

        // API.getCandidateMatch(this.setState({ userId: "5dd5b80d8d2d1e5f60ac8852" }))
        console.log('state.userId= ', this.state.userId)
        // this.setState({ completed: true })

        // .then(res => {this.setState({matchData: res.data})})
        // .catch(err => {console.log(err)})
    }

    // fuction maps through results & renders each candidate & percentage of same answers question asked
    showResults = () => {
        // console.log('showResults hit')
        return (
            this.state.allCandidates.map(candidate => {
                // this.state.userResults.map(result => {
                return (
                    //Code for static json 
                    <ResultsItems
                        key={candidate.name}
                        name={candidate.name}
                        image={headImg}
                        percentage={"45%"}
                    />

                    // CODE for res.data from db
                    // <ResultsItems
                    //   key={result._id}
                    //   name={result.name}
                    //   image={result.headImg}
                    //   percentage={result.percentage}
                    // />       

                );
            })
        )
    }


    render() {

        console.log('render() state========= ', this.state)

        return (
            <div>
                <Nav />
                <Container specs="uProfile">
                    <Row>
                        <Col size="col-12">
                            <div className="resultsStyles mx-auto">
                                {/* {this.showResults} */}
                                {this.state.completed ? this.showResults() : "Loading Your Matches Now..."}
                            </div>
                        </Col>
                    </Row>
                </Container >
            </div >
        );

    }
}

export default CandidateMatches;