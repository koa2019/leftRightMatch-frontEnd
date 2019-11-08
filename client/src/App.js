import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch';
import Quiz from './pages/Quiz';
import FrontPage from "./pages/FrontPage";
import UserProfile from "./pages/UserProfile";
import CandidateProfile from "./pages/CandidateProfile";
import LoginSignUp from "./pages/LoginSignup";

// Needs sessions for Login/Signup

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path='/quiz' component={Quiz} />
            <Route exact path="/userprofile" component={UserProfile} />
            <Route exact path="/candidateprofile" component={CandidateProfile} />
            <Route exact path="/login" component={LoginSignUp} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
