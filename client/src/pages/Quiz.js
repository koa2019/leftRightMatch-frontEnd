// dependencies
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import questions from "../utils/questions.json";
import QuizFormItem from '../components/QuizForm';
import '../css/Quiz.css';
// import API from '../utils/API';

class Quiz extends Component {

  state = {
    //questions:[],
    questions,
    qqId: '',
    name: '',
    test: '',
    loading: false,
    isProblem: false
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
  }

  handleSubmit() {
    console.log('handleSubmit', this.state)

  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Which Political Candidate Are You Most Like?</h1>
        </Jumbotron>

        <Container>
          <Row>
            <Col size="sm-12">


              {/* if/then/else conditional for questions array. if questions isn't empty, then loop through each index in array */}
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
                    <input type="submit" />
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