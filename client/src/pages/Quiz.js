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
      questions,
      userAnswers: [],
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
      completed:false
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
        
        return (

          <ResultsItems
            key={candidate.name}
            name={candidate.name}
            image={headImg}
            percentage={"45%"}
          />

          // <Modal
          //   key={candidate.name}
          //   show={this.state.show}
          //   handleClose={this.hideModal}
          //   name={candidate.name}
          //   image={headImg}
          //   percentage={"45%"}
          // >
          //   <img className="rImg" src={headImg} alt={candidate.name} />
          // </Modal>          
        );
      })
    )
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  // function when a radio input is clicked
  handleInputChange = event => {
    
    // console.log('handleChange hit')
    const { name, value } = event.target;
    // console.log('[name]: value = ', name, value)

    // answers[name] assigns this dynamical named property name as answers key/prop name 
    // & initializes its value from its html attribute equal to value 
    // will update & reflect its value if a different radio input is selected - elimantes redundancy
    this.state.answers[name] = value;
    this.setState({ answers: this.state.answers });
    // this.setState.answers[name] = value;

  }

  handleQuizSubmit = event => {

    event.preventDefault();

    console.log('handleSubmit hit')
    // this.showResults()
    this.setState({completed:true})

    // send this.state.answers to axios.post() to database
    API.saveUserAnswers(this.state.answers)
    // .then(res => {
    //   console.log('saveUserAnswers>promise', res)
    //   call showModal() & render user quiz results
    // {this.showModal}
    // })
    // .catch(err => {
    //   console.log(err)
    //   //redirect to NoMatch page
    //   this.props.history.push("/NoMatch")
    // })
  }

  render() {

    console.log('render() state========= ', this.state)
    console.log('render this.state.show = ', this.state.show)
    const show;

    return (

      <div>
        <Nav />
        <Jumbotron>
          <h1>Which Political Candidate Are You Most Like?</h1>
        </Jumbotron>

        <Container specs="qContainer">
          <Row>
            <Col size="col-md-12">
              <form className="quizForm" onSubmit={this.handleQuizSubmit}>

                {!this.state.completed ? this.renderQuestions(): ''}
                < FormBtn
                >Submit button
                </FormBtn>
              </form>

              {/* button has onClick listner to reference function to display modal */}
              {/* <button onClick={this.showModal}>Show Modal</button> */}

            </Col>
          </Row>

          <Row>
            <Col size="col-12">

              {/* if show === true then render this div pass this className, else pass this className to define div modal */}
              {this.state.show === "true" ? <Results /> : <QuizForm />}

              <div className="resultsStyles mx-auto">
                {/* <Results /> */}
                { this.state.completed ? this.showResults(): ""}
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

export default Quiz;