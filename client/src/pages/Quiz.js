// dependencies
import React, { Component } from "react";
import Nav from '../components/Nav';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import questions from "../utils/questions.json";
import { QuizFormItem, RadioInput, FormBtn } from "../components/QuizForm/";
// import API from "../utils/API";

class Quiz extends Component {

  state = {
    loading: false,
    isProblem: false,
    isLoggedIn: "",
    userId: "",
    userAnswers: [],
    questionsData: [],
    questions,
    qqId: "",
    name: "",
    test: "",
    isYes: 0

  };

  // a method to reference this from element functions called on?
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleQuizSubmit = this.handleQuizSubmit.bind(this);
  }

  // uncomment this function when backend is ready to use
  componentDidMount() {
    // this.loadQuestions();
    if (this.state.questions.length === 0) {
      return (
        alert("Uh-Oh Error Loading Questions")
      )
    }
    return (
      this.setState({ loading: true, isProblem: false })
    )
  }
  // loadQuestions() {
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

  // if/then/else conditional for questions array. if questions isn"t empty, then loop through each index in array
  renderQuestions() {
    return (
      this.state.questions.map(question => {
        return (
          <QuizFormItem
            key={question.qqId}
            onChange={this.handleInputChange}
            id={question.qqId}
            name={question.name}
            question={question.qq}
            >
            <RadioInput />
          </QuizFormItem>
        );
      })
    )
  }

  handleInputChange = event => {
    // Need to setState userId from req.params 
    // Need to setState isYes to the value of radio input from QuizForm for each question answered
    // push all answers values into userAnswers array with userId
    // save userAnswers to database
    console.log(event)
    // $(.chosen).map( (index, element)=> {
    //   let answer = $(this).val();
    //   userAnswers.push(answer)
    // })
    // console.log(userAnswers)
  }

  handleQuizSubmit = event => {
    event.preventDefault();

    console.log("handleSubmit ", this.state)

  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron>
          <h1>Which Political Candidate Are You Most Like?</h1>
        </Jumbotron>

        <Container>
          <Row>
            <Col size="col-md-12">
              <form>
                {this.renderQuestions()}
                {/* {this.state.questions.map(question => {
                  return (
                    <QuizFormItem
                      key={question.qqId}
                      onChange={this.handleInputChange}
                      id={question.qqId}
                      name={question.name}
                      question={question.qq}
                    >
                      <RadioInput />
                    </QuizFormItem>
                  );
                })} */}
                < FormBtn onSubmit={this.handleQuizSubmit}
                >Submit
                </FormBtn>
              </form>

            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

export default Quiz;