// dependencies
import React, { Component } from "react"
import Nav from '../components/Nav'
import Jumbotron from "../components/Jumbotron"
import { Col, Row, Container } from "../components/Grid"
import questions from "../utils/questions.json"
import { QuizFormItem, RadioInput, FormBtn } from "../components/QuizForm/QuizForm"
import "./pageStyles/Quiz.css"
// import API from "../utils/API";

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
      answers: [],
      count: 30,
      value: "",
      ////////////////////
      // keys for res.data
      isLoggedIn: "",
      userId: "",
      questionsData: [],
      qqId: "",
      name: ""
    };
  }

  // uncomment this function when backend is ready to use

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
  renderQuestions = () => {
    return (
      this.state.questions.map(question => {
        return (
          <QuizFormItem
            key={question.qqId}
            name={question.name}
            question={question.qq}
          >
            <RadioInput
              key={question.qqId}
              name={question.qqId}
              onChange={this.handleInputChange}
              value1={this.state.stance1}
              value2={this.state.stance2}
            />
          </QuizFormItem>
        );
      })
    )
  }

  // function when a radio input is clicked
  handleInputChange = event => {
    // Need to setState userId from req.params 
    // Need to capture value of radio input from QuizForm for each question answered
    const { name, value } = event.target;
    // console.log('[name]: value = ', name, value)

    this.setState({
      // answer: value
      [name]: value,
    });

    this.setState(state => {
        const answers = state.answers.concat( {[name]: value} );
        return {
          answers, 
          value: ""
        };
    });


    // tried updating [name]:value] & then cancat the array
    // this.setState(state => {
    //   const answers = state.answers
    //   console.log('answers ', answers)
    //     .map((answer, j) => {
    //       if (j === name) {
    //         return this.setState({ [name]: value })
    //       }
    //       else {
    //         return answer
    //       }
    //     })
    //   return { answers }
    // })

    console.log('Change() state ', this.state)
  }

  handleQuizSubmit = event => {
    event.preventDefault();
    // console.log('handleSubmit hit')
    console.log("Submit() state: ", this.state)
    // console.log('handleSubmit q0:', this.state.q0)

    // this.state.map(state => {
    //   return (
    //     console.log(state)
    //   )
    // })
    // axios post() userAnswers to database

  }

  render() {
    console.log('render() state ', this.state)
    return (
      <div>
        <Nav />
        <Jumbotron>
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