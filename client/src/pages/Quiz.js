// dependencies
import React, { Component } from "react"
import "./pageStyles/Quiz.css"
import Nav from "../components/Nav/Nav"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import { Col, Row, Container } from "../components/Grid/Grid"
import questions from "../utils/questions.json"
import { QuizForm, QuizFormItem, RadioInput, FormBtn } from "../components/QuizForm/QuizForm"
import API from "../utils/API";
import { Results, ResultsItems } from "../components/Results/Results"
import allCandidates from "../utils/candidates.json"
import headImg from "../images/joe-biden-cutout.png"
// import Modal from "../components/Modal/Modal"

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isProblem: false,
      completed: false,
      questions,
      userResults: [],
      answers: {},
      count: 30,
      value: "",
      allCandidates,
      show: "false",
      headImg,
      ////////////////////
      // keys for res.data
      isLoggedIn: "",
      userId: "",
      questionsData: [],
      key: "",
      name: "",
    };
  }

  // uncomment this function when backend is ready to use

  loadQuestions() {
    //   this.setState({ loading: true, isProblem: false }, () => {
    API.getQuestions()
    //       .then(res => {
    //         this.setState({ questionsData: res.data, loading: false });
    //         console.log(this.state.questionsData)
    //       })
    //       .catch(err => {
    //         console.log(err)
    //         this.setState({ loading: false, isProblem: true });
    //       });
    //   });
  }

  // renders questions & stances
  renderQuestions = () => {
    return (
      this.state.questions.map(question => {
        return (
          <QuizFormItem
            key={question.key}
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
    return (
      this.state.allCandidates.map(candidate => {
        // this.state.userResults.map(result => {
        return (
          // CODE for res.data from db
          // <ResultsItems
          //   key={result._id}
          //   name={result.name}
          //   image={result.headImg}
          //   percentage={result.percentage}
          // />       
          <ResultsItems
            key={candidate.name}
            name={candidate.name}
            image={headImg}
            percentage={"45%"}
          />
        );
      })
    )
  }

  // function when a radio input is clicked
  handleInputChange = event => {

    const { name, value } = event.target;
    // console.log('[name]: value = ', name, value)

    // answers[name] assigns this named property dynamically as the answers key/prop name & initializes its value from its html attribute equal to value 
    // will update & reflect its value if a different radio input is selected - elimantes redundancy
    this.state.answers[name] = value;
    this.setState({ answers: this.state.answers });

  }

  // after db connected in .then add code to setState & render user's matches
  handleQuizSubmit = event => {
    event.preventDefault();
    console.log('handleSubmit hit')

    this.setState({ completed: true })

    // send this.state.answers to axios.post() to database
    API.saveUserAnswers(this.state.answers)

      .then(res => {
        //save response from database to state.userAnswers
        console.log('saveUserAnswers>promise', res.data)
        this.setState({ userResults: res.data })
        // call function to map through results from db 
        // this.showResults()
      })
      .catch(err => {
        console.log(err)
        //redirect to NoMatch page
        // this.props.history.push("/NoMatch")
      })
  }

  render() {

    console.log('render() state========= ', this.state)

    return (

      <div>
        <Nav />
        <Jumbotron specs="quizHead">
          <h1>Quiz</h1>
          <h1>Which Political Candidate Are You Most Like?</h1>
        </Jumbotron>

        <Container specs="qContainer">
          <Row>
            <Col size="col-md-12">

              <div onSubmit={this.handleQuizSubmit}>

                <QuizForm specs={"quizForm"} onSubmit={this.handleQuizSubmit}>

                  {!this.state.completed ? this.renderQuestions() : ""}

                  <FormBtn
                    // disabled={!this.state.completed}
                  >Submit</FormBtn>

                </QuizForm>
              </div>

            </Col>
          </Row>

          <Row>
            <Col size="col-12">
              <div className="resultsStyles mx-auto">
                {this.state.completed ? this.showResults() : ""}
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

export default Quiz;