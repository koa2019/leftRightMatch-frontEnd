// dependencies
import React, { Component } from "react";
import Nav from '../components/Nav';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import questions from "../utils/questions.json";
import { QuizFormItem, RadioInput, FormBtn } from "../components/QuizForm/";
// import API from "../utils/API";

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isProblem: false,
      isLoggedIn: "",
      userId: "",
      userAnswers: [],
      questionsData: [],
      questions,
      qqId: "",
      name: "",

    };
    // a method to reference this from element functions called on?
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleQuizSubmit = this.handleQuizSubmit.bind(this);
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
  renderQuestions() {
    return (
      this.state.questions.map(question => {
        return (
          <QuizFormItem
            key={question.qqId}
            name={question.name}
            question={question.qq}
          >
            <RadioInput
              name={question.qqId} key={question.qqId}
              onChange={this.handleInputChange} />
          </QuizFormItem>
        );
      })
    )
  }

  handleInputChange = event => {
    // Need to setState userId from req.params 
    // Need to capture value of radio input from QuizForm for each question answered
    // const value = target.value;
    // const name = target.name;
    const { name, value } = event.target;
    console.log('[name]: value = ', name, value)

    this.setState({
      [name]: value
    });
    console.log(this.state)
    // push all answers values into userAnswers array with userId
    // $(.chosen).map( (index, element)=> {
    //   let answer = $(this).val();
    //   userAnswers.push(answer)
    // })
    // console.log(userAnswers)

    // save userAnswers to database

  }

  handleQuizSubmit = event => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log('[name]: value = ', name, value)

    this.setState({
      [name]: value
    });
    console.log("handleSubmit this.state: ", this.state)

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