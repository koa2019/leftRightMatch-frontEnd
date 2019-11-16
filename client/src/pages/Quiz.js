// dependencies
import React, { Component } from "react"
import Nav from "../components/Nav/Nav"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import { Col, Row, Container } from "../components/Grid/Grid"
import questions from "../utils/questions.json"
import { QuizFormItem, RadioInput, FormBtn } from "../components/QuizForm/QuizForm"
import "./pageStyles/Quiz.css"
import API from "../utils/API";

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isProblem: false,
      stance1: "Pro-Choice",
      stance2: "Pro-Life",
      questions,
      userAnswers: [],
      answers: {},
      count: 30,
      value: "",
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


  // if/then/else conditional for questions array. if questions isn"t empty, then loop through each index in array
  renderQuestions = () => {
    return (
      this.state.questions.map(question => {
        return (
          <QuizFormItem
            key={question.key}
            name={question.key}
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
    API.saveUserResults(this.state.answers)
    // .then(res => {
    //     console.log('API.saveUserResults>promise> res', res)
    // })
    // .catch(err => {
    //     console.log(err)
    // })

  }

  render() {
    console.log('render() state========= ', this.state)
    return (
      <div>
        <Nav />
        <Jumbotron specs="hello">
          <h1>Which Political Candidate Are You Most Like?</h1>
        </Jumbotron>

        <Container>
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
        </Container>
      </div >
    );
  }
}

export default Quiz;