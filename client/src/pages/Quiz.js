// dependencies
import React, { Component } from "react"
import "./pageStyles/Quiz.css"
import Nav from "../components/Nav/Nav"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import { Col, Row, Container } from "../components/Grid/Grid"
import questions from "../utils/questions.json"
import { QuizFormItem, RadioInput, FormBtn } from "../components/QuizForm/QuizForm"
import Modal from "../components/Modal/Modal"
import API from "../utils/API";
import {Results, ResultsItems} from "../components/Results/Results"
import allCandidates from "../utils/candidates.json"
import headImg from "../images/biden-cutout.png"

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isProblem: false,
      questions,
      userAnswers: [],
      answers: {},
      count: 30,
      value: "",
      allCandidates,
      // headImg,
      ////////////////////
      // keys for res.data
      isLoggedIn: "",
      userId: "",
      questionsData: [],
      key: "",
      name: ""
    };
  }

  // uncomment this function when backend is ready to use

  // loadQuestions() {
  //    console.log(this.state.questionsData)
  //   this.setState({ loading: true, isProblem: false }, () => {
  //     API.getQuestions(this.state.questionsData)
  //       .then(res => {
  //         this.setState({ questionsData: res.data, loading: false });
  //         console.log(this.state.questionsData)
  //       })
  //       .catch(err => {
  //         console.log(err)
  //         this.setState({ loading: false, isProblem: true });
  //       });
  //   });
  // }

  // renders questions & stances
  renderQuestions = () => {
    return (
      this.state.questions.map(question => {
        return (
          <QuizFormItem
            key={question.key}
            // name={question.key}
            question={question.question}
          >
            <RadioInput
              key={question.key}
              name={question.key}
              onChange={this.handleInputChange}
              value0={question.stances[0]}
              value1={question.stances[1]}
            />
          </QuizFormItem>
        );
      })
    )
  }

  // fuction maps through results & renders each candidate & percentage of same answers question asked
  showResults = () => {

    // console.log('showResults hit')
    // console.log('allCand ', this.state.allCandidates)
    
    return (
      this.state.allCandidates.map(candidate => {
        return (
          <ResultsItems
            key={candidate.name}
            name={candidate.name}
            image={headImg}
          >
          </ResultsItems>
        );
      })
    )
  }

  // function when a radio input is clicked
  handleInputChange = event => {
    console.log('handleChange hit')

    const { name, value } = event.target;
    console.log('[name]: value = ', name, value)

    this.state.answers[name] = value;
    this.setState({ answers: this.state.answers });
    // delete this.state.answers[name];

  }

  handleQuizSubmit = event => {

    event.preventDefault();

    console.log('handleSubmit hit')

    // send this.state.answers to axios.post() to database
    API.saveUserAnswers(this.state.answers)

      .then(res => {
        console.log('saveUserAnswers>promise> res', res)
        // Show the modal with the best match
        // $("#results-modal").modal("show");
      })

      .catch(err => {
        console.log(err)
      })

  }

  render() {

    console.log('render() state========= ', this.state)

    return (

      <div>
        <Nav />
        <Jumbotron>
          <h1>Which Political Candidate Are You Most Like?</h1>
        </Jumbotron>

        <Container specs="qContainer">
          <Row>
            <Col size="col-md-12">
              <form onSubmit={this.handleQuizSubmit}>

                {this.renderQuestions()}
                < FormBtn
                >Submit
                </FormBtn>
              </form>
            </Col>
          </Row>

          <Row>
            <Col size="col-12">
              <div className="card resultsStyles mx-auto">
                <Modal />
                <Results>
                </Results>
               {this.showResults()}
              </div>

            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

export default Quiz;