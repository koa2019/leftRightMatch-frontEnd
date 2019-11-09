// dependencies
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import questions from "../utils/questions.json";
import QuizFormItem from "../components/QuizForm/";
import SubmitBtn from "../components/SubmitBtn";
// import API from "../utils/API";

class Quiz extends Component {

  state = {
    loading: false,
    isProblem: false,
    isLoggedIn: "",
    userId: "",
    userAnswers: [],
    //questions:[],
    questions,
    qqId: "",
    name: "",
    test: "",
    isYes: 0    
    
  };

  // a method to reference this from element functions called on?
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // uncomment this function when backend is ready to use
  // componentDidMount(){
  //   this.loadQuestions();
  // }
  // loadQuestions() {
  //   this.setState({ loading: true, isProblem: false }, () => {
  //     API.getQuestions(this.state.questions)
  //       .then(res => {
  //         this.setState({ questions: res.data, loading: false });
  //         console.log(this.state.questions)
  //       })
  //       .catch(err => {
  //         console.log(err)
  //         this.setState({ loading: false, isProblem: true });
  //       });
  //   });
  // }


  handleChange(answerValue) {
    this.setState({ test: answerValue })
    // Need to setState userId from req.params 
    // Need to setState isYes to the value of radio input from QuizForm for each question answered
    // push all answers values into userAnswers array with userId
    // save userAnswers to database
  }

  handleSubmit() {
    console.log("handleSubmit ", this.state)

  }

  renderQuestion() {

    if (this.state.questions.length === 0) {

        return (

            //return whatever
        );
    }

    return (

        // case 2
    );
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Which Political Candidate Are You Most Like?</h1>
        </Jumbotron>

        <Container>
          <Row>
            <Col size="col-sm-12">
              {this.renderQuestion()}
              {/* if/then/else conditional for questions array. if questions isn"t empty, then loop through each index in array */}
              {!this.state.questions.length ? (
                <h3>Uh-Oh Error Loading Questions</h3>
              ) : (
                  <form>
                    {this.state.questions.map(question => {
                      return (
                        <QuizFormItem
                          onSubmit={this.handleSubmit}
                          onClick={this.handleChange}
                          key={question.qqId}
                          name={question.name}
                          question={question.qq}
                        />
                      );
                    })}
                    <SubmitBtn />
                  </form>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Quiz;