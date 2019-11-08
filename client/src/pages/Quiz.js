// dependencies
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import questions from "../utils/questions.json";

// const questions = [
//   {
//     "qqId": "234",
//     "name": "Question 22",
//     "qq": "??? Who 22 ???"

//   }
// ]

class Quiz extends Component {

  state = {
    questions,
    qqId: { userId: questions.userId },
    name: ''

  }

  loadQuestions() {
    this.setState({ userId: questions.userId })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              <h1>Which Political Candidate Are You Most Like?</h1>
            </Jumbotron>

            {/* if/then/else conditional for questions array. if questions isn't empty, then loop through each index in array */}
            {!this.state.questions.length ? (
              <h3>Uh-Oh Error Loading Questions</h3>
            ) : (
                <List>
                  {this.state.questions.map(question => {
                    return (
                      <ListItem key={question.qqId}>
                        <h4>{question.name}</h4>
                        <p>{question.qq}</p>
                        {/* <SaveBtn /> <DeleteBtn /> */}
                      </ListItem>
                    );
                  })}
                </List>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Quiz;